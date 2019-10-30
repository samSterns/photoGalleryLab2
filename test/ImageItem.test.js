import ImageItem from '../home/imageItem.js';
const test = QUnit.test;

QUnit.module('Render image Item');

test('renders html from data', assert => {
    // arrange
    const image = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };

    const expected = `
        <li class="info-container">
            <h2>${image.title}</h2>
            <div class="image-container">
                <img src="${image.url}" alt="${image.title}">
            </div>
            <div>
                <h3 class="animal-type">${image.keyword}</h3>
                <h4 class="horns">1</h4>
            </div>
        </li>   
    `;

    // act
    const props = { image: image };
    const ImageItem = new ImageItem(props);
    const html = ImageItem.renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});