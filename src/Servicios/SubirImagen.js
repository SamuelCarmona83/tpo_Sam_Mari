
export default async function subirImagenACloudinary (imagen){
    const cloudId = 'dkk2fe3os';

        if (imagen) {
            const formData = new FormData();
                formData.append('file', imagen);
                formData.append('upload_preset', 'rro35z0v');

            try {
                const response = await fetch(
                    `https://api.cloudinary.com/v1_1/${cloudId}/image/upload`,
                    {
                        method: 'POST',
                        body: formData,
                    }
                );

                const data = await response.json();
                return data.secure_url;
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
}