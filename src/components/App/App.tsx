import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import { getPhotos } from "../../services/photos";
import { useState } from "react";
import type { Photo } from "../../types/photo";

export default function App() {

  const [images, setImages] = useState<Photo[]>([])

  const fetchImgs = async(query: string) => {
    const dataImgs = await getPhotos(query);
    setImages(dataImgs);
  }

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={fetchImgs} />
          <PhotosGallery images={images}/>
        </Container>
      </Section>
    </>
  );
}
