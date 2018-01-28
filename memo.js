const express = require('express');

const app = express();
const router = express.Router();

const memo = {}

// GET すべてのメモの取得
// id: メモのid title: メモのタイトル date: メモが登録された日付
router.get('/memo/list', (req, res)=>{
    res.json(memo);
});

// GET すべてのメモの取得
// id: メモのid title: メモのタイトル body: メモの本文 date: メモが登録された日付
router.get('/memo/:id', (req, res)=>{
    res.json(memo[req.params.id]);
});

// POST メモのポスト
router.post('/memo', (req, res)=>{
    let title = req.body.title;
    let body = req.body.body;
    let id = (Object.keys(memo).length).toString();
    memo[id] = {
        title: title,
        body: body,
        date: new Date().toString()
    }
    res.json(true);
});

// PUT メモの更新
router.put('/memo/:id', (req, res)=>{

});

// DELETE メモの削除
router.delete('/memo/:id', (req, res)=>{

});


// Scheduler.js に移行予定
// // GET 1週間の予定表の取得
// //
// router.get('/scheduler/list', (req, res)=>{
    
// });

// // GET 1週間内ある曜日の予定表の取得
// // :DOW 曜日
// //
// router.get('/scheduler/:DOW', (req, res)=>{
    
// });

module.exports = router;