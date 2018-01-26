const puppeteer = require('puppeteer');
var AV = require('leancloud-storage');
const previewUrl = ''//网址
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
    await page.goto(`${previewUrl}${req.guid}`);
    await page.waitForSelector('.nodeCompleted')
    var pdfData = await page.pdf({path: `${req.guid}.pdf`, format: 'A4'});
    var fileResult = await new AV.File(`${req.guid}.pdf`,pdfData).save()
    await browser.close();
    return ctx.body = fileResult.attributes.url
}

