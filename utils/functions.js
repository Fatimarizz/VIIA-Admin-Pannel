export function dataURLtoFile(dataURL, fileName) {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, { type: mime });
}

export function urltoFile (dataURL ,fileName){
  // Extracting MIME type from the data URL
  const mimeRegex = /^data:(.*?);/;
  const mimeMatch = dataURL.match(mimeRegex);
  
  // Checking if MIME type is found
  if (!mimeMatch) {
      console.error("MIME type not found in the data URL");
      return null;
  }

  // Extracting the MIME type from the match
  const mime = mimeMatch[1];

  // Converting base64 to binary string
  const bstr = atob(dataURL.split(',')[1]);

  // Creating a Uint8Array to hold binary data
  const n = bstr.length;
  const u8arr = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
      u8arr[i] = bstr.charCodeAt(i);
  }

  // Creating a File object
  return new File([u8arr], fileName, { type: mime });
}
export async function imageFromUrlToFile(imageUrl, fileName) {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      return new File([blob], fileName);
    } catch (error) {
      console.error('Error fetching or converting the image:', error);
      return null;
    }
  }

  export function formatDateToRelativeTime(dateString) {
    const createdAt = new Date(dateString);
    const now = new Date();
  
    const diffInMilliseconds = now - createdAt;
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  
    if (diffInMilliseconds < 60000) {
      // Less than a minute
      return rtf.format(-Math.floor(diffInMilliseconds / 1000), 'second');
    } else if (diffInMilliseconds < 3600000) {
      // Less than an hour
      return rtf.format(-Math.floor(diffInMilliseconds / 60000), 'minute');
    } else if (diffInMilliseconds < 86400000) {
      // Less than a day
      return rtf.format(-Math.floor(diffInMilliseconds / 3600000), 'hour');
    } else if (diffInMilliseconds < 2592000000) {
      // Less than a month
      return rtf.format(-Math.floor(diffInMilliseconds / 86400000), 'day');
    } else {
      // More than a month
      return rtf.format(-Math.floor(diffInMilliseconds / 2592000000), 'month');
    }
  }
  
 export function formatDateToDdMmYyyy(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
  
    return `${day}-${month}-${year}`;
  }
 export function formatTimeToAMPM(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }
  