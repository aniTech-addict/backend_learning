import Logs from "../models/logs.model.js";

async function createLogs(req,res){
    try{
        const log = await Logs.create(req.body);
        return response = res.status(201).json({ status: 'success', message: 'Log created successfully', data: log });
    }catch(err){
        console.log(err);
        return response = res.status(500).json({ status: 'failed', message: err.message });
    }
}

async function deleteLogs(req,res){
    try{
        const log = await Logs.findByIdAndDelete(req.params.id);
        return response = res.status(200).json({ status: 'success', message: 'Log deleted successfully', data: log });
    }catch(err){
        console.log(err);
        return response = res.status(500).json({ status: 'failed', message: err.message });
    }
}

async function updateLogs(req,res){
    try{
        const log = await Logs.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return response = res.status(200).json({ status: 'success', message: 'Log updated successfully', data: log });
    }catch(err){
        console.log(err);
        return response = res.status(500).json({ status: 'failed', message: err.message });
    }
} // find a better way to do it later

export {
    createLogs,
    deleteLogs,
    updateLogs,
}