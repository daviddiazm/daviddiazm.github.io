export const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/pdfs/David Diaz Montengro CV.pdf'; // Ruta del archivo PDF
    link.download = 'David Diaz Montengro CV.pdf'; // Nombre con el que se descargará el archivo
    link.click();
}