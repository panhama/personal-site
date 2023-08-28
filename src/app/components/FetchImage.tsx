// "use client"
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// const flickrApiKey = '1e4e54710d8b6ceaea18b0ca77efbe52';
// const userId = '111456022%40N04';
// import style from './FetchImage.module.css';
// import { Masonry } from '@mui/lab';
// export default function FetchImage() {



//   const [photos, setPhotos] = useState([]);
//   useEffect(() => {
//     const fetchPhotoInfo = async (photo: any) => {
//       const response = await fetch(
//         `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${flickrApiKey}&photo_id=${photo.id}&format=json&nojsoncallback=1`
//       );
//       const data = await response.json();
//       return data;
//     };

//     const fetchPhotos = async () => {
//       const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${flickrApiKey}&user_id=${userId}&format=json&nojsoncallback=1`);

//       const data = await response.json();

//       const photosData: any = await Promise.all(
//         data.photos.photo.map(async (photo: any) => {
//           const photoInfo = await fetchPhotoInfo(photo);
//           const { originalsecret, originalformat } = photoInfo.photo;

//           return {
//             id: photo.id,
//             url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${originalsecret}_o.${originalformat}`,
//             title: photo.title,
//             width: 850,
//             height: 850,
//           };
//         })
//       );

//       setPhotos(photosData);
//     };

//     fetchPhotos();
//   }, []);

//   return (
//     <div className={style.body}>
//       <Masonry columns={3}>
//         {photos.map((photo: any) => (
//           <div key={photo.id}>
//             <img src={photo.url} alt={photo.title} className={style.img} />
//           </div>
//         ))}
//       </Masonry>
//     </div>

//   );
// }

 {/* <div className="grid">
      {photos.map((photo :any) => (
        <div key={photo.id} style={{display:'inline'}} className='.grid-item'>
          <Image src={photo.url} alt={photo.title} width={photo.width} height={photo.height} style={{objectFit:'cover'}} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div> */}