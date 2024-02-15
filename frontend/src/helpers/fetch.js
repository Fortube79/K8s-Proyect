const fetchManage = ( endpoint, body, method = 'GET' ) => {
    const url = 'http://167.71.9.55:30999/' + endpoint;

    if ( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( body )
        });
    }
        

}

export {
    fetchManage
}