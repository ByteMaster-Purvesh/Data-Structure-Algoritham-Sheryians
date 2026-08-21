function get_movie_status(ratingStr) {
        // Write your code here

    let msg = null
        if( 0.0 <= ratingStr && 2.0 >= ratingStr){
            return 'Flop'
        } else if ( 2.1 <= ratingStr && 3.4 >= ratingStr ){
            return 'Semi-hit'
        } else if ( 3.4 <= ratingStr && 4.5 >= ratingStr ){
            return 'Hit'
        } else if ( 4.6 <= ratingStr && 5.0 >= ratingStr ){
            return 'Super-Hit'
        }
}

console.log(get_movie_status(5.0))