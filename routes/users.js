const router = require('koa-router')()
const UserVC = require('../controller/user.controller')
const pdfView = require('../middleare/pdfGenerate')
router.prefix('/api')

router.post('/pdf',pdfView.save)
module.exports = router
