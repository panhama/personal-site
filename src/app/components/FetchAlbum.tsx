"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Lightbox from 'react-18-image-lightbox'; 

const flickrApiKey = '1e4e54710d8b6ceaea18b0ca77efbe52';
const userId = '111456022%40N04';
 import style from './FetchImage.module.css';
 import { Masonry } from '@mui/lab';
import { useMediaQuery } from '@mui/material';
import { log } from 'console';


export default function FetchAlbum({ Portfolio }: { Portfolio: boolean }) {
  const albumId = Portfolio ?  '72177720304357811':'72177720310757101';
  const [photos, setPhotos] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const isSmallScreen = useMediaQuery('(max-width:600px)'); 
  const isMediumScreen = useMediaQuery('(min-width:601px) and (max-width:1200px)');
  
  useEffect(() => {
    const fetchPhotoInfo = async (photo: any) => {
      try {
        const response = await fetch(
          `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${flickrApiKey}&photo_id=${photo.id}&format=json&nojsoncallback=1`
        );
        const data = await response.json();
        return data.photo; 
      } catch (error) {
        console.error("Error fetching photo info:", error);
        return null;
      }
    };

    const fetchPhotos = async () => {
      try {
        const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${flickrApiKey}&photoset_id=${albumId}&user_id=${userId}&format=json&nojsoncallback=1`);
        const data = await response.json();

        const photosData: any = await Promise.all(
          data.photoset.photo.map(async (photo: any) => {
            const photoInfo = await fetchPhotoInfo(photo);
            if (!photoInfo) {
              return null;
            }

            const { originalsecret, originalformat } = photoInfo;

            return {
              id: photo.id,
              url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${originalsecret}_o.${originalformat}`,
              title: photo.title._content,
              width: 850,
              height: 850,
            };
          })
        );

        setPhotos(photosData.filter((photo: any) => photo !== null));
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className={style.div}>
      <Masonry columns={isSmallScreen ? 1 : (isMediumScreen ? 2 : 3)} spacing={2}>
        {photos.map((photo: any) => (
          <div key={photo.id}>
            {/* <img src={photo.url} alt={photo.title}  /> */}
            <Image src={photo.url} alt={photo.title} width={photo.width} height={photo.height} className={style.img}/>           
          </div>
        ))}
      </Masonry>
    </div>
  );
}
