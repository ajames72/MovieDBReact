# Movie DB Search - _(React)_
Search The Movie DB (TMDb): The user should be able to enter some text into a search field, see and browse the results from the Movie DB.

## Getting Started

This application is being developed using Webpack, React, React-Router, Redux, Redux Thunks.

_(Further details are pending)_

## Documentation

_(Documentation is pending)_

### Notes

Having problems with findWhere & filterWhere.

Scenario:
In the header component, I wanted to test for the active link.
Using the code below, I expected to filter the results and get a single list item with class 'active'

    it('should display an active menu item', () => {
      const navBar = mount(<NavBar sectionAttributes={attributes} />);

      console.log(mount(<NavBar sectionAttributes={attributes} />).debug());

      let test = navBar.find('li').filterWhere((element) => {
        element.hasClass('active') == true;
      });
      expect(test.length).toBe(1);

    });

and this code fails as shown below

      [▬▬▬▬▬▬▬▬․․․․․․․․․․․․․․․․․․․․․․․․․․․․․․]
    <NavBar sectionAttributes={{...}}>
    <div className="row">
    <nav className="navbar navbar-default">
      <ul className="nav navbar-nav">
        <NavBarItem link="movies" label="Movies" active={true}>
          <li className="active">
            <Link to="movies" onlyActiveOnIndex={false} style={{...}}>
              <a style={{...}} onClick={[Function]}>
                Movies
              </a>
            </Link>
          </li>
        </NavBarItem>
        <NavBarItem link="collections" label="Collections">
          <li className={[undefined]}>
            <Link to="collections" onlyActiveOnIndex={false} style={{...}}>
              <a style={{...}} onClick={[Function]}>
                Collections
              </a>
            </Link>
          </li>
        </NavBarItem>
        <NavBarItem link="companies" label="Companies">
          <li className={[undefined]}>
            <Link to="companies" onlyActiveOnIndex={false} style={{...}}>
              <a style={{...}} onClick={[Function]}>
                Companies
              </a>
            </Link>
          </li>
        </NavBarItem>
        <NavBarItem link="people" label="People">
          <li className={[undefined]}>
            <Link to="people" onlyActiveOnIndex={false} style={{...}}>
              <a style={{...}} onClick={[Function]}>
                People
              </a>
            </Link>
          </li>
        </NavBarItem>
        <NavBarItem link="tvshows" label="TV Shows">
          <li className={[undefined]}>
            <Link to="tvshows" onlyActiveOnIndex={false} style={{...}}>
              <a style={{...}} onClick={[Function]}>
                TV Shows
              </a>
            </Link>
          </li>
        </NavBarItem>
      </ul>
    </nav>
    </div>
    </NavBar>
    [▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬․․․․․․․․․․․․․․․․․․․․․․․]
    /Users/jamesa26/Development/Javascript/My Web Sites/MovieDBReact/src/components/common/header/NavBar.test.js (0/1)
    !  42:7  Unexpected console statement  no-console

    ! 1 warning (3:26:34 PM)

    [▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬]

    80 passing (279ms)
    1 failing

    1) NavBar Component structure should display an active menu item:
     Error: Expected 0 to be 1
      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toBe (node_modules/expect/lib/Expectation.js:86:28)
      at Context.<anonymous> (NavBar.test.js:9:1)


Having problems testing attributes
Scenario: I want to test the values of the links.

    it('should have a link', () => {
      const navBarItem = mount(<NavBarItem label="Test label" link="mylink" active />);
      console.log(navBarItem.find('Link').debug());
      expect(navBarItem.find('[link="mylink"]').length).toBe(1);
    });



## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.

_Please don't edit files in the "dist" subdirectory as the files there are generated via Webpack. You'll find source code in the "src" subdirectory!_

## Release History
v0.1

## License
Copyright (c) 2017 ajames72  
Licensed under the MIT license.
