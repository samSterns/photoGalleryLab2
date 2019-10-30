import Component from '../Component.js';
import ImageItem from './CatItem.js';

class ImageList extends Component {

    renderHTML() {
        return /*html*/`
            <ul class='horny-animal'></ul>
        `;
    }

    onRender(dom) {
        const images = this.props.images;

        images.forEach(cat => {
            const props = { cat: cat };
            const imageItem = new ImageItem(props);
            const imageItemDOM = imageItem.renderDOM();
            dom.appendChild(imageItemDOM);
        });
    }
}

export default ImageList;