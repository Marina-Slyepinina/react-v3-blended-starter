import type { Photo } from "../../types/photo";
import styles from "./PhotosGalleryItem.module.css";

interface PhotosGalleryItemProps {
  image: Photo;
}

export default function PhotosGalleryItem({ image }: PhotosGalleryItemProps) {
  return (
      <div
        className={styles.thumb}
        style={{
          backgroundColor: image.avg_color,
          borderColor: image.avg_color,
        }}
      >
        <img src={image.src.large} alt={image.alt} />
      </div>
  );
}
