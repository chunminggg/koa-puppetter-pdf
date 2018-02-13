const puppeteer = require('puppeteer');
var AV = require('leancloud-storage');
const previewUrl = 'http://eln.ilabpower.com:8020/cloud-community/detailExp/html/mobileExpPrint.html?'//网址
exports.save =  async (ctx,next) => {
    let req = ctx.request.body
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.setCookie({
        name: 'ucStorage',
        value: req.ucStorage,
        path: '/',
        domain: '.ilabpower.com',//配域名
        httpOnly:false,
        secure:true,
    })
    await page.setJavaScriptEnabled(true)
    await page.goto(`${previewUrl}${req.guid}&${req.userId}`);
    await page.waitForSelector('.nodeCompleted')
    var pdfData = await page.pdf({path: `${req.guid}.pdf`, format: 'A4'});
    
    var fileResult = await new AV.File(`${req.guid}.pdf`,pdfData).save()
    await browser.close();
    return ctx.body = fileResult.attributes.url
}

