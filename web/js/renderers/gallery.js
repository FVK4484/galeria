import { parseHTML } from "../utils/parseHTML.js";
import { photoRenderer } from "./photos.js";

const galleryRenderer = {
    asCardGallery: (photos) => {
        let gallery = document.createElement("div")
        gallery.className = "photoGallery";
        let fila = parseHTML("<div class='row'></div>");
        gallery.appendChild(fila);
        let i = 0;
        for (let photo of photos) {
            fila.appendChild(photoRenderer.asCard(photo));
            i++;
            if (i%3==0){
                fila = parseHTML("<div class='row'></div>");
                gallery.appendChild(fila);
            }
        }
        return gallery;
    }
}

export { galleryRenderer }