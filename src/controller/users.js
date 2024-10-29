const UserModel = require('../models/users');
const sendMail = require('../config/mail');
const { v4: uuidv4 } = require('uuid');

// Mendapatkan semua pengguna
const getAllUsers = async (req, res) => {
    try {
        const [users] = await UserModel.getAllUsers();
        res.json({
            message: 'GET all users success',
            data: users,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

// Mendaftarkan pengguna
const register = async (req, res) => {
    const { fullname, username, email, password } = req.body;

    // Validasi input
    if (!fullname || !username || !email || !password) {
        return res.status(400).json({
            message: 'Data tidak lengkap',
        });
    }

    try {
        // Cek apakah email sudah terdaftar
        const existingUser = await UserModel.findByEmail(email);
        if (existingUser[0].length > 0) {
            return res.status(200).json({ message: 'Email sudah terdaftar' });
        }

        // Buat token untuk verifikasi
        const token = uuidv4();

        // Simpan pengguna baru dengan token ke database
        await UserModel.createNewUser({ fullname, username, email, password, token });

        // Kirim email verifikasi
        await sendMail(email, token);

        return res.status(201).json({
            message: 'REGISTER success. Silakan cek email untuk verifikasi.',
            data: { fullname, username, email },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Terjadi kesalahan saat mendaftar user',
        });
    }
};

// Login pengguna
const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: 'Data tidak lengkap',
        });
    }

    try {
        const user = await UserModel.findByEmail(email);
        if (user[0].length === 0 || password !== user[0][0].Password) {
            return res.status(401).json({ message: 'Email atau password salah' });
        }

        return res.status(200).json({
            message: 'LOGIN success',
            data: {
                id: user[0][0].ID_User,
                fullname: user[0][0].Fullname,
                username: user[0][0].Username,
                email: user[0][0].Email,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Terjadi kesalahan saat login user',
        });
    }
};

// Memperbarui pengguna
const updateUser = async (req, res) => {
    const { idUser } = req.params;
    const { body } = req;

    try {
        await UserModel.updateUser(body, idUser);
        res.json({
            message: 'UPDATE user success',
            data: { id: idUser, ...body },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error',
        });
    }
};

// Menghapus pengguna
const deleteUser = async (req, res) => {
    const { idUser } = req.params;

    try {
        await UserModel.deleteUser(idUser);
        res.json({
            message: 'User berhasil dihapus',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error',
        });
    }
};

// Verifikasi email pengguna
const verifyEmail = async (req, res) => {
    const { token } = req.query;

    // Log token untuk debugging
    console.log("Received token:", token); // Ini akan menunjukkan token yang diterima

    // Pastikan token tidak kosong
    if (!token) {
        return res.status(400).json({ message: 'Token tidak ditemukan' });
    }

    try {
        // Temukan pengguna berdasarkan token
        const user = await UserModel.findByToken(token);
        if (!user) {
            return res.status(400).json({ message: 'Token tidak valid' });
        }

        // Aktifkan pengguna
        await UserModel.activateUser(user.ID_User);
        res.status(200).json({ message: 'Email berhasil diverifikasi' });
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan' });
    }
};

module.exports = {
    register,
    login,
    getAllUsers,
    updateUser,
    deleteUser,
    verifyEmail, 
};
