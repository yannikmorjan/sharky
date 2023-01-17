class CollectableObject extends DrawableObject {

    height = 45;
    width = 45;
    
    animate(images) {
        setInterval( () => {
            this.playAnimation(images);
        },300);
    }
}