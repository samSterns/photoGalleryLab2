import Component from '../Component.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import FilterImages from './FilterImages.js';
import images from '../data/images.js'; 

class App extends Component {

    onRender(dom) {
        const header = new Header({
            
        });
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            images: images
        };

        const imageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();

        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(imageListDOM);


        const filterImages = new FilterImages({
            images: images,
            onFilter: (imageType) => {
                let filteredImages;
                if (!imageType) {
                    filteredImages = images;
                }
                else {
                    filteredImages = images.filter(image => {
                        return image.type === imageType;
                    });
                }

                const updateProps = { images: filteredImages };
                imageList.update(updateProps);
            }
        });

        const filterImagesDOM = filterImages.renderDOM();

        const optionsSection = dom.querySelector('.filter');
        optionsSection.appendChild(filterImagesDOM);

    }

    renderHTML() {
        return /*html*/`
            <body>
                <main>
                    <section class="filter">
    
                    </section>
                    <section class="list-section">
                      
                    </section>
                </main>
            </body>
        `;
    }
}

export default App;