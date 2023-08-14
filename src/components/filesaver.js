import {saveAs} from "file-saver";
export async function downloadImage(image,client_id) {
  const base64Image = image.replace(/^data:image\/(png|jpg);base64,/, '');

  // Convert the base64 string to a Blob
  const blob = new Blob([new Uint8Array(atob(base64Image).split('').map(char => char.charCodeAt(0)))], {
    type: 'image/png',
  });

  // Use FileSaver.js to save the Blob as a PNG file
  saveAs(blob, `${client_id}`);
}
