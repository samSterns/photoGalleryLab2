import Component from '../Component.js';

class ImageItem extends Component {
    renderHTML() {
        const image = this.props.image;

        return /*html*/`
            <li class="image-item">
                <div class="horny-animal">
                    <h2>${image.name}</h2>
                    <p class="filte-choices">${image.title}</p>
                </div>
                <div class="horny-animal">
                    <img src="${image.url}" alt="${image.description}">
                </div>
                <p class="horn:">horns: ${image.horns}</p>
            </li>
        `;
    }
}

export default ImageItem;