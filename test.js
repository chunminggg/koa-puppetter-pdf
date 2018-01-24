const puppeteer = require('puppeteer');
var pdfMake = async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setCookie({
        name: 'ucStorage',
        value: '{"Token":"FA89F6B4-9BC9-423C-85ED-7BD9BFFE0B85","AccountInfo":{"Photo":"\/photo\/176\/20171128143910.png","LastLoginTime":"2018-01-24 16:18:36","MobilePhone":"15151965291","RealName":"miao01","RegTime":"2017-07-27 13:32:42","ID":176,"Email":"miaoyy01@test.com"},"OrgName":"电子实验记录组织机构","Identity":"4F33990B-99BB-4533-B801-C8F2564CA707","OrgCode":"#000072"}',
        path: '/',
        domain: '.labpower.com'
    })
    await page.setJavaScriptEnabled(true)
    await page.goto('http://eln.ilabpower.com:8020/cloud-community/detailExp/html/mobileExpPrint.html?abc4fe9f-80a5-2140-2002-b3a2a894d8dd');
    await page.waitForSelector('.nodeCompleted')
    var pdfData = await page.pdf({path: `1.pdf`, format: 'A4'});
    var fileResult = await new AV.File('1.pdf',pdfData).save()
    await browser.close();
}
pdfMake()