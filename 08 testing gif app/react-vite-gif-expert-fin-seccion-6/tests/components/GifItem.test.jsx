const { render, screen } = require("@testing-library/react");
const { GifItem } = require("../../src/components");

describe ('Tests in <GifItem />', () => {

    const title = 'Title'
    const url = 'https://react.com/'

    test('should make match with the snapshot', () => { 
        const {container} = render(<GifItem title = {title} url = {url} />)
        expect (container ).toMatchSnapshot();

     });

    test('should show the image whith the URL and ALT ', () => { 
        
        render ( <GifItem  title = {title} url = {url} />)
        screen.debug();   //to show the component
        //expect (screen.getByRole('img').src).toBe(url);
        const {src , alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
     })

     test('should show the correct title', () => { 
        render ( <GifItem  title = {title} url = {url} />)
        expect ( screen.getByText( title)).toBeTruthy();
      })
});