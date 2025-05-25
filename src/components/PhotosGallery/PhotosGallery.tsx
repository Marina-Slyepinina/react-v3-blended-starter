import type { Photo } from "../../types/photo";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";

interface PhotosGalleryProps {
  images: Photo[];
}

export default function PhotosGallery({ images }: PhotosGalleryProps) {
  return <Grid>
    {images.map((image) => (
      <GridItem key={image.id}>
        <PhotosGalleryItem image={image} />
      </GridItem>
    ))}
  </Grid>;
}
