const UserModel = require('../models/users');

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
    const { body } = req;
    if (!body.fullname || !body.username || !body.email || !body.password) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        });
    }

    try {
        const existingUser = await UserModel.findByEmail(body.email);
        if (existingUser[0].length > 0) {
            return res.status(400).json({ message: 'Email sudah terdaftar' });
        }

        await UserModel.createNewUser(body);
        return res.status(201).json({
            message: 'REGISTER success',
            data: {
                fullname: body.fullname,
                username: body.username,
                email: body.email,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Terjadi kesalahan saat mendaftar pengguna',
            serverMessage: error,
        });
    }
};

// Login pengguna
const login = async (req, res) => {
    const { body } = req;
    if (!body.email || !body.password) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        });
    }

    try {
        const user = await UserModel.findByEmail(body.email);
        if (user[0].length === 0) {
            return res.status(401).json({ message: 'Email atau password salah' });
        }

        const isValidPassword = body.password === user[0][0].Password;
        if (!isValidPassword) {
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
            message: 'Terjadi kesalahan saat login pengguna',
            serverMessage: error,
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
            data: {
                id: idUser,
                ...body,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

// Menghapus pengguna
const deleteUser = async (req, res) => {
    const { idUser } = req.params;

    try {
        await UserModel.deleteUser(idUser);
        res.json({
            message: 'DELETE user success',
            data: null,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

// Verifikasi email pengguna
const verifyEmail = async (req, res) => {
    try {
        // Tambahkan logika verifikasi email di sini
        res.status(200).json({ message: 'Email berhasil diverifikasi' });
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan', serverMessage: error });
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
