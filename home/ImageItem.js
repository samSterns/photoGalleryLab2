import Component from '../Component.js';

class ImageItem extends Component {
    renderHTML() {
        const image = this.props.image;

        return /*html*/`
            <li class="image-item">
                <div class="info-container">
                    <h2>${image.name}</h2>
                    <p class="image-type">${image.keyword}</p>
                </div>
                <div class="image-container">
                    <img src="${image.url}" alt="${image.name} image">
                </div>
                <p class="year">${image.year}</p>
            </li>
        `;
    }
}

export default ImageItem;