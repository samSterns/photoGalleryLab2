import Component from '../Component.js';

class ImageItem extends Component {
    renderHTML() {
        const image = this.props.image;

        return /*html*/`
            <li class="image-item">
                <div class="horny-animal">
                    <h2>${image.name}</h2>
                    <p class="filte-choices">${image.keyword}</p>
                </div>
                <div class="horny-animal">
                    <img src="${image.url}" alt="${image.name} image">
                </div>
                <p class="year">${image.year}</p>
            </li>
        `;
    }
}

export default ImageItem;