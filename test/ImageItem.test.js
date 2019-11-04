import ImageItem from '../home/ImageItem.js';
const test = QUnit.test;

QUnit.module('Render image Item');

test('renders html from data', assert => {
    // arrange
    const images = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };

    const expected = `
        <li class="image-item">
        <div class="horny-animal">
            <p class="filter-choices">${images.title}</p>
        </div>
        <div class="horny-animal">
            <img src="${images.url}" alt="${images.description}">
        </div>
        <p class="horn:">horns: ${images.horns}</p>
    </li>
    `;

    // act
    const props = { image: images };
    const imageItem = new ImageItem(props);
    const html = imageItem.renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});