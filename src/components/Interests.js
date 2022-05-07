
function Interests () {
  return (
    <div className="flex-center-col interests-wrapper" id="interests">
      <h3>Non-Tech Things I Like</h3>
      <div className="main-interest-section">
        <div className="right-hand-project project-container">
          <div className="interst-title">
            <h5>Fencing </h5>
            <img src='https://i.imgur.com/DmQMpSf.png'></img>
          </div>
          <p>
          I used to fence internationally and have represented both Great Britain and Northern Ireland. Since I stopped competeing, I&apos;ve qualified as an international referee and have been fortunate enought to referee at the Rio 2016 and Tokyo 2020 Paralympic games. 
          </p>
        </div>
        <div className="left-hand-project project-container">
          <div className="interst-title">
            <h5>Japan </h5>
            <img src='https://imgur.com/yIc7aVh.png'></img>
          </div>
          <p>
          I&apos;ve lived in Japan a couple of times and can speak Japanese to a high level. I helped organisations such as the RFU, British Olympic Association and British Paralympic Assosication prepare for Tokyo 2020 and the Rugby World Cup 2019 and ran the Japanese Sport Stories Podcast with SOAS University and Paralympian Noel Thatcher. I love Japanese literature, especially Sayaka Murata and Yu Miri, and Japanese movies/cheesy dramas. 
          </p>
        </div>
        <div className="right-hand-project project-container">
          <div className="interst-title">
            <h5>Animal Rescue </h5>
            <img src='https://i.imgur.com/rMT7Gag.png'></img>
          </div>
          <p>
          Me and my partner work with Kent Greyhound Rescue as foster carers - we help newly rescued dogs settle into home-lives for the first times to give them the best chance of being adopted. We also have our own rescue, Bob. A constant backround companion throughout my coding sessions. 
          </p>
        </div>
      </div>
      <div className="full-width flex-center-col">
        <div>
          <h3>What I&apos;m Reading</h3> 
        </div>
        <div className="black-border flex-sa">
          <div className="half-width book-section">
            <div>
              <p>Now</p> 
              <img className="reading-image" src="https://pictures.abebooks.com/isbn/9781908968494-uk.jpg"></img>
            </div>
          </div>
          <div className="half-width last-book">
            <div>
              <p>Last time</p>
              <img className="reading-image" src="https://www.europaeditions.com/spool/cover_9781609455873__id1719_w480_t1573725973__1x.jpg"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Interests