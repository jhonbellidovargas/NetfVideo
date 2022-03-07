import md5 from 'md5';

const gravatar = (email) => {
    const base = 'https://www.gravatar.com/avatar/';
    // formateamos al mail eliminando espacio y poniendo mayusculas
    const formattedEmail = (email).trim().toLowerCase();
    //  generamos el hash del mail eliminando arroba y codificandolo
    const hash = md5(formattedEmail,{encoding: 'binary'});
    return `${base}${hash}`;
};

export default gravatar;