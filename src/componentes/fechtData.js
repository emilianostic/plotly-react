

const FechtData = () => {

        const url = 'https://gist.githubusercontent.com/davenquinn/988167471993bc2ece29/raw/f38d9cb3dd86e315e237fde5d65e185c39c931c2/data.json' ;
      
        return fetch(url)
          .then((res) => res.json())
          .then((data) => {
            return data;
          })
          .catch((ex) => {
            console.error(ex);
          });
      
};

export default FechtData;
