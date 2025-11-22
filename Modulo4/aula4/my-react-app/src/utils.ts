//podemos colcoar a função em arquivo separado como utils.ts
export default function getImageUrl(person: any, size: string = 's') {
   return (
    'https://i.imgur.com/' +
    person.imageId +
     size +
     '.jpg'
   );
 }