import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import './App.scss';

function App() {
  return (
    <div className="app">
      <header>
        <div className='grid container justify-space-evenly'>
          <div className='grid item md-3 container justify-flex-end'>
            <div className='grid item xs-12 container'>
              <div className='grid item xs-12'>
                <span className='font-size-large'>Travelize</span>
              </div>
              <div className='grid item xs-12'>
                <span><em>My traveling experiences</em></span>
              </div>
            </div>
          </div>
          <div className='grid item md-2 container align-center hide-mobile'>
            <div className='grid item xs-4'>
              <button className='navigation-button'>Home</button>
            </div>
            <div className='grid item xs-4'>
              <button className='navigation-button'>Blog</button>
            </div>
            <div className='grid item xs-4'>
              <button className='navigation-button active'>About</button>
            </div>
          </div>
        </div>
      </header>
      <div className='grid container justify-center'>
        <div className='item'>
          <img id='hero-img' src={heroBackground} />
        </div>
      </div>
      <main>
        <div className='grid container justify-center spacing-2'>
          <div className='grid item xs-12 md-3 container justify-center'>
            <img src={headshot} id='headshot' />
          </div>
          <div className='grid item xs-12 md-9'>
            <div>
              <h1>A little about me</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend porttitor neque a tincidunt. Vivamus et blandit lorem. Mauris sodales ligula et consectetur varius. Aenean vehicula placerat libero non tristique. Cras gravida vitae lacus eget consequat. Curabitur nec eros pulvinar, cursus mauris vitae, condimentum nisl. Maecenas vestibulum cursus lectus nec eleifend. Mauris varius, metus id aliquet eleifend, risus arcu imperdiet purus, eget ultricies risus ipsum sed tortor. Praesent ipsum eros, efficitur in aliquam id, porta sed erat. In fermentum, magna in facilisis tincidunt, turpis sem sodales nibh, quis imperdiet risus elit quis odio. Donec ac hendrerit elit.
              </p>
              <p>
                Integer vel dignissim sapien. Fusce bibendum diam et lectus vestibulum posuere. Nullam elit libero, commodo in tellus lobortis, maximus commodo tellus. Curabitur id egestas tortor, ac condimentum nibh. Pellentesque in porttitor urna. Duis id convallis lorem. Mauris sapien neque, eleifend vel vulputate iaculis, vulputate eu dui. Nam auctor, erat ut tincidunt aliquam, elit nunc mollis odio, eu tincidunt elit purus vitae sem. Maecenas id ex in odio sodales facilisis. Nam blandit viverra nisi quis luctus. Nunc quis leo eget odio tincidunt blandit. Suspendisse sed bibendum lacus. Morbi quis erat augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p>
                Integer vel lacus sollicitudin, cursus nibh id, suscipit nisl. Aenean nec purus eu velit luctus finibus eget at dui. Integer tempus, felis tincidunt scelerisque mattis, ligula nisi bibendum purus, non vestibulum purus diam at felis. Vestibulum lectus justo, tincidunt fringilla sollicitudin vel, rhoncus quis enim. Fusce in pellentesque lacus. Integer iaculis, risus in feugiat placerat, quam tortor aliquam nisi, vehicula suscipit turpis neque sed tortor. Etiam convallis malesuada dolor sed suscipit.
              </p>
              <p>
                Curabitur at malesuada metus. Donec euismod, urna vitae iaculis iaculis, libero neque placerat neque, eget aliquet tellus odio nec libero. Quisque maximus quam et lorem imperdiet, varius sagittis massa viverra. Morbi finibus vestibulum tellus, in tempus nunc rhoncus ut. Duis risus tellus, tempor at imperdiet sit amet, aliquam et quam. Nunc suscipit, dolor in imperdiet malesuada, risus neque interdum mi, quis scelerisque tellus ligula vel felis. Nulla ultricies massa quis accumsan rhoncus. Donec sapien odio, blandit in condimentum id, mollis a tellus. Donec lacus lorem, dapibus at pulvinar in, sodales et mauris.
              </p>
              <p>
                Duis volutpat tincidunt elit, fermentum condimentum mi aliquet nec. Curabitur vulputate a lorem et placerat. Sed dignissim tincidunt dui a finibus. Maecenas pulvinar volutpat dui sed dapibus. Nunc porttitor eu erat a consequat. Aenean feugiat imperdiet ullamcorper. Donec molestie libero et finibus mollis. Phasellus aliquam purus quis porta interdum. Maecenas bibendum, enim sed tempus semper, leo mi volutpat eros, id ultricies libero metus id neque. Cras ultricies magna non est vulputate aliquet. Fusce hendrerit sem eu orci lacinia, eget feugiat nisl efficitur. Maecenas lorem dui, imperdiet eget magna eget, malesuada feugiat quam. Nam aliquam iaculis condimentum.
              </p>
              <p>
                Maecenas libero turpis, hendrerit eu suscipit sed, dignissim viverra dolor. Mauris finibus molestie arcu ut tempus. Integer varius orci erat, at luctus tortor convallis vel. Curabitur lobortis, lorem sit amet hendrerit vulputate, ipsum sem scelerisque nisl, id ultricies ex sem eget sem. Aliquam congue quis turpis ac hendrerit. Nunc id quam et mi sodales varius vel a ligula. Nam velit enim, interdum non neque a, rhoncus consequat justo. Proin vitae est varius, rhoncus magna in, pharetra turpis. Vivamus nec vehicula mi. Morbi eget mi quis sapien cursus mattis a eu tortor. Phasellus rutrum lectus vel sollicitudin luctus. Praesent consectetur sem non lacus gravida tempor. Aliquam et aliquam diam. Sed sit amet erat hendrerit, semper ex vitae, facilisis turpis.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className='grid container justify-space-evenly align-center'>
          <div className='grid item xs-4 container justify-flex-end'>
            <div className='grid item xs-12 container'>
              <span>&copy; Travelize 2020</span>
            </div>
          </div>
          <div className='grid item xs-6 md-3 container'>
            <div className='grid item xs-12 container spacing-2'>
              <span className='grid item'>Privacy Policy</span>
              <span className='grid item'>Terms and conditions</span>
            </div>
          </div>
      </footer>
    </div>
  );
}

export default App;
