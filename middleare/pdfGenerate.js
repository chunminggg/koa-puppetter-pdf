const puppeteer = require('puppeteer');
var AV = require('leancloud-storage');
<<<<<<< HEAD
const previewUrl = ''//网址
=======
var fs = require('fs')
const previewUrl = 'http://eln.ilabpower.com:8020/cloud-community/detailExp/html/mobileExpPrint.html?'
>>>>>>> 21ad0a740d3d9e64ad3e6f7ea3f77eac6641518b
exports.save =  async (ctx,next) => {
    let req = ctx.request.body
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setCookie({
        name: 'ucStorage',
        value: req.ucStorage,
        path: '/',
        domain: '.xxx.com',//配域名
        httpOnly:false,
        secure:true,
    })

    await page.setJavaScriptEnabled(true)
<<<<<<< HEAD
    await page.goto(`${previewUrl}${req.guid}`);
=======
    await page.goto(`${previewUrl}${req.guid}&${req.userId}`);
>>>>>>> 21ad0a740d3d9e64ad3e6f7ea3f77eac6641518b
    await page.waitForSelector('.nodeCompleted')
    var pdfData = await page.pdf({path: `${req.guid}.pdf`, format: 'A4'});
    var fileResult = await new AV.File(`${req.guid}.pdf`,pdfData).save()
    await browser.close();
    return ctx.body = fileResult.attributes.url
}

