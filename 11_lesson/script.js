// В блоке Featured Items небходимо реализовать шаблон товаров.
// Для этого необходимо создать json формат данных по всем товарам.
// Из этого файла сформировать блок Featured Items.
// Всю вёрстку остальных частей реализовывать не нужно, если у вас она была сделана на html/css можно использовать, заново создавать не требуется.

const dataProductParse = JSON.parse(dataProduct);
const featuredItems = document.querySelector('.featured_content');
const template = template_featured_block.content

dataProductParse.forEach(el => {
    let newTemplate = template.cloneNode(true);
    newTemplate.querySelector('.featured_block_img').src = el.img;
    newTemplate.querySelector('.featured_block_img').alt = "featured_image";
    newTemplate.querySelector('.featured_block_title').alt = el.title;
    newTemplate.querySelector('.featured_block_desc').alt = el.desc;
    newTemplate.querySelector('.featured_block_price').alt = el.price;
    featuredItems.appendChild(newTemplate);
});
