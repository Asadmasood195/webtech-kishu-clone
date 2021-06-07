import { useEffect } from 'react'

function App() {
  const run = () => {
    let head = document.getElementsByTagName('head')[0]
    let script = document.createElement('script')
    let script2 = document.createElement('script')
    script.async = 1
    script.src = "js/webflow.js"
    script2.src = "d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8e1ad.js"
    head.appendChild(script)
    head.appendChild(script2)
  }
  useEffect(() => {
    run()
  }, [])
  return (
    <>
      <div className="kishu-live-ticker w-embed w-script">
        {/*  TradingView Widget BEGIN  */}
        <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget" />
        </div>
        {/*  TradingView Widget END  */}
      </div>
      <div data-w-id="c16aa2e5-b43d-c2cf-7dba-44198f5f82bf" className="google-translator-2">
        <div className="html-embed w-embed">
          <div id="google_translate_element" />
        </div>
      </div>
      <div data-w-id="52e8b043-e2cb-1d7c-5a6f-3c81d4b9a9f2" style={{ display: 'flex', opacity: 1 }} className="page-load-wrapper">
        <img src="images/06-small.gif" loading="lazy" alt='pics' className="image-23" />
      </div>
      <div data-w-id="e3673c46-df59-1f99-93e3-043bb54261e5" className="back-to-top">
        <a href="#home" className="capitals nav-link is--back-to-top">BACK TO TOP</a>
      </div>
      <section id="home" className="hero">
        <div data-collapse="medium" data-animation="over-right" data-duration={400} data-doc-height={1} data-no-scroll={1} role="banner" className="navbar native w-nav">
          <div className="container-1800 is--nav">
            <div className="navbar custom">
              <a href="#home" id="Kishu-logo" className="brand brand-2 w-node-_6be0c6f3-5804-18a3-23b0-d24feef2e7fe-52018772 w-nav-brand" />
              <nav role="navigation" id="w-node-_6be0c6f3-5804-18a3-23b0-d24feef2e7ff-52018772" className="nav-menu w-nav-menu">
                <a href="#why-kishu" className="capitals nav-link w-nav-link">Why kishu</a>
                <div data-hover={1} data-delay={0} className="dropdown w-dropdown">
                  <div className="w-dropdown-toggle">
                    <div className="icon w-icon-dropdown-toggle" />
                    <div className="capitals nav-link is--dropdown">Why kishu</div>
                  </div>
                  <nav className="dropdown-list w-dropdown-list">
                    <a href="#" className="dropdown-link w-dropdown-link">Kishu Swap</a>
                    <a href="#" className="dropdown-link _2 w-dropdown-link">Kishu Swap</a>
                    <a href="#" className="dropdown-link _3 w-dropdown-link">Kishu Swap</a>
                  </nav>
                </div>
                <a href="#how-to-buy" className="capitals nav-link w-nav-link">How to buy</a>
                <a href="#stats" className="capitals nav-link w-nav-link">tokenomics</a>
                <a href="#kishu-swap" className="capitals nav-link w-nav-link">swap</a>
                <a href="#moonmap" className="capitals nav-link w-nav-link">moonmap</a>
                <a href="#donate" className="capitals nav-link w-nav-link">donate</a>
              </nav>
              <a id="w-node-_6be0c6f3-5804-18a3-23b0-d24feef2e80c-52018772" href="https://exchange.kishu.com/#/swap?inputCurrency=ETH&outputCurrency=0xa2b4c0af19cc16a6cfacce81f192b024d625817d" target="_blank" className="cta-button is--nav-link w-button">BUY $KISHU</a>
              <div className="spacer" />
              <div className="w-nav-button">
                <div className="w-icon-nav-menu" />
              </div>
            </div>
          </div>
        </div>
        <div className="background-image is--hero" />
        <div className="floating-elements-container">
          <div className="fl-element v1"><img src="images/Ellipse-1-copy-5.png" loading="lazy" alt='pics' /></div>
          <div className="fl-element v2"><img src="images/Ellipse-1-copy-6.png" loading="lazy" alt='pics' /></div>
        </div>
        <div className="container-1800">
          <div className="hero-content-wrapper">
            <div className="_2-col-grid is--hero">
              <div id="w-node-_151b762e-3975-8bd9-09a6-b15858026423-52018772" className="hero-text">
                <h1 className="display">Little meme.<br />Big dream.</h1>
                <p className="is--hero-text">Kishu Inu ($KISHU) is a community-focused, decentralized cryptocurrency with
                instant rewards for holders. Join the moon mission. 🐶</p>
                <div className="hero-buttons">
                  <a href="https://exchange.kishu.com/#/swap?inputCurrency=ETH&outputCurrency=0xa2b4c0af19cc16a6cfacce81f192b024d625817d" target="_blank" className="cta-button red-button w-button">BUY $KISHU</a>
                  <a href="whitepaper/KishuInuWhitepaper.pdf" target="_blank" className="cta-button w-button">WHITEPAPER</a>
                </div>
                <div className="social-icons is--hero">
                  <a href="https://t.me/kishuinucommunity" target="_blank" className="social-icon-item is--hero w-inline-block">
                    <div className="fa-social-icon is--hero"></div>
                  </a>
                  <a href="https://www.reddit.com/r/KishuInu/" target="_blank" className="social-icon-item is--hero w-inline-block">
                    <div className="fa-social-icon is--hero"></div>
                  </a>
                  <a href="https://twitter.com/inukishu?lang=en" target="_blank" className="social-icon-item is--hero w-inline-block">
                    <div className="fa-social-icon is--hero"></div>
                  </a>
                  <a href="https://www.instagram.com/inukishu/?hl=en" target="_blank" className="social-icon-item is--hero w-inline-block">
                    <div className="fa-social-icon is--hero"></div>
                  </a>
                  <a href="https://www.youtube.com/results?search_query=kishu+inu" target="_blank" className="social-icon-item is--hero w-inline-block">
                    <div className="fa-social-icon is--hero"></div>
                  </a>
                  <a href="https://medium.com/coinmonks/kishu-inu-token-everything-about-it-798dc0ae6a43" target="_blank" className="social-icon-item is--hero w-inline-block">
                    <div className="fa-social-icon is--hero"></div>
                  </a>
                  <a href="https://github.com/Kishu-Inu/Kishu-Inu-Contracts" target="_blank" className="social-icon-item is--hero w-inline-block">
                    <div className="fa-social-icon is--hero"></div>
                  </a>
                  <a href="https://discord.gg/kishuinucommunity" target="_blank" className="social-icon-item is--hero w-inline-block">
                    <div className="fa-social-icon is--hero"></div>
                  </a>
                </div>
              </div>
              <div id="w-node-c5f9f19b-7168-f059-943c-ccb78b848fa7-52018772" className="hero-graphics-wrapper">
                {/* <img src="images/V1.gif" loading="lazy" alt='pics' className="kishu-tailwag is-full-height" />
                <img src="images/bowl2x.png" loading="lazy" sizes="(max-width: 479px) 95.99609375px, 256.9921875px" width={257} alt='pics' className="dog-bowl" />
                <img src="images/dream2x.png" loading="lazy" width={193} alt='pics' className="kishu-dreambubble" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-down-container">
          <a href="#why-kishu" className="scroll-down w-inline-block">
            <h6 className="purple">WHY KISHU?</h6>
            <div className="arrow is--down" />
          </a>
        </div>
      </section>
      <section id="why-kishu" className="why-kishu">
        <div className="container-1800">
          <div className="section-heading is--why-kishu">
            <div className="accent-large">$Kishu</div>
            <h2 className="h2-what-is-kishu">Why Kishu?</h2>
          </div>
          <div data-w-id="87ebf16d-1406-997c-c236-81e39756dba7" className="why-kishu-scrolling-container">
            <div className="_2-col-grid bottom-padding is--sticky">
              <div id="w-node-_4d01e470-0316-6366-bff1-e94ed46148b2-52018772" className="left-col">
                <div data-w-id="33305f40-759f-5b1c-d56f-046096d6bea0" className="why-kishu-image"><img src="images/instant-rewards---background-no-kishu.png" loading="lazy" width={772} sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw" srcSet="images/instant-rewards---background-no-kishu-p-500.png 500w, images/instant-rewards---background-no-kishu-p-800.png 800w, images/instant-rewards---background-no-kishu.png 887w" alt='pics' className="what-is-kishu-img" /><img src="images/shining-stars-.png" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, (max-width: 1919px) 46vw, 32vw" srcSet="images/shining-stars--p-500.png 500w, images/shining-stars-.png 618w" alt='pics' className="shining-stars" /><img src="images/02-v1-big.gif" loading="lazy" width={1038} alt='pics' className="image-19" /></div>
                <div data-w-id="33305f40-759f-5b1c-d56f-046096d6bea2" className="why-kishu-image _2"><img src="images/1.png" loading="lazy" width="440.5" sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw" srcSet="images/1-p-800.png 800w, images/1.png 887w" alt='pics' className="what-is-kishu-img" /></div>
                <div data-w-id="33305f40-759f-5b1c-d56f-046096d6bea4" className="why-kishu-image _3"><img src="images/3.png" loading="lazy" width="440.5" sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw" srcSet="images/3-p-800.png 800w, images/3.png 887w" alt='pics' className="what-is-kishu-img" /></div>
              </div>
              <div id="w-node-bc539372-19b1-6802-b824-1e8e8666fcb6-52018772" className="right-col">
                <div data-w-id="5c6a93ce-3cd4-9d9a-119c-37c503aa87d6" className="why-kishu-text-item">
                  <h3>Instant<br />Rewards</h3>
                  <p className="_w-414">For every transaction in KISHU's network (buy or sell), 2% of the transaction is
                  distributed to existing holders. That means you earn $KISHU just by holding it in your wallet.</p>
                  {/* <a href="#" class="link">Some link here</a> */}
                </div>
                <div id="telegram" data-w-id="cd9039a0-2dd2-5175-0451-9e43e496cf63" className="why-kishu-text-item">
                  <h3>Community <br />Powered</h3>
                  <p className="_w-414">KISHU is fully decentralized and owned by its fun, vibrant community. We welcome and
                  embrace diverse perspectives to build KISHU into the best community in crypto.</p>
                  <a href="https://t.me/kishuinucommunity" target="_blank" className="link">Join our Telegram community</a>
                </div>
                <div data-w-id="050d4163-cfce-5ea7-6bb8-c24dc4660203" className="why-kishu-text-item">
                  <h3>Secure &amp; Safe</h3>
                  <p className="_w-414">KISHU has been audited and its LP (Liquidity Pool) tokens have been burnt. That means
                  zero risk to our investors from potential bad actors.</p>
                  <a href="audits/KishuInu-Audit-TechRate.pdf" target="_blank" className="link">See our security audit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="how-to-buy" data-w-id="79154066-a6be-0e91-28f5-f2df3abf15d2" className="how-to-buy">
        <div className="container-1800">
          <div className="section-heading">
            <h2 className="h2-what-is-kishu">How to buy $Kishu</h2>
            <div className="accent-large">Buy</div>
          </div>
          <div data-w-id="8a60e5e9-f138-7430-05c7-8063c205bff1" data-animation-type="lottie" data-src="documents/frisbee-dog.json" data-loop={0} data-direction={1}
            data-autoplay={0} data-is-ix2-target={1} data-renderer="canvas" data-default-duration="2.0020019204587935" data-duration={0} className="lottie-animation-2">
          </div>
          <div className="dog-frisbee-wrapper">
            <div id="w-node-_82d26454-4b9c-a99d-09e5-0cacf9e7004a-52018772" data-w-id="82d26454-4b9c-a99d-09e5-0cacf9e7004a" className="frisbee-wrapper">
              <img src="images/frisbee.png" loading="lazy" width={1338} sizes="100vw" srcSet="images/frisbee-p-500.png 500w, images/frisbee-p-800.png 800w, images/frisbee-p-1080.png 1080w, images/frisbee-p-1600.png 1600w, images/frisbee-p-2000.png 2000w, images/frisbee.png 2776w" alt='pics' className="image-3" />
              <img src="images/Shape-4.png" loading="lazy" alt='pics' className="image-4" />
            </div>
            <div id="w-node-_7c27231e-b663-e33d-3c65-9b4ead67e582-52018772" data-w-id="7c27231e-b663-e33d-3c65-9b4ead67e582" className="dog-wrapper">
              <img src="images/ki-facer-1.png" loading="lazy" width={515} sizes="100vw" srcSet="images/ki-facer-1-p-500.png 500w, images/ki-facer-1-p-800.png 800w, images/ki-facer-1.png 1030w" alt='pics' className="image-5" />
              <img src="images/Shape-3.png" loading="lazy" sizes="100vw" srcSet="images/Shape-3-p-500.png 500w, images/Shape-3.png 1024w" alt='pics' className="image-6" />
            </div>
          </div>
          <div className="htbs-wrapper">
            <div data-duration-in={300} data-duration-out={100} className="tabs w-tabs">
              <div className="tabs-menu w-tab-menu">
                <a data-w-tab="Tab 1" className="htb-tab w-inline-block w-tab-link w--current">
                  <h6 className="htb-tab">STEP 1</h6>
                </a>
                <a data-w-tab="Tab 2" className="htb-tab w-inline-block w-tab-link">
                  <h6 className="htb-tab">STEP 2</h6>
                </a>
                <a data-w-tab="Tab 3" className="htb-tab w-inline-block w-tab-link">
                  <h6 className="htb-tab">STEP 3</h6>
                </a>
                <a data-w-tab="Tab 4" className="htb-tab w-inline-block w-tab-link">
                  <h6 className="htb-tab">STEP 4</h6>
                </a>
              </div>
              <div className="tabs-content w-tab-content">
                <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                  <div className="htb-item">
                    <div className="htb-number"><img src="images/htb-shape-behind-number.png" loading="lazy" alt='pics' className="htb-shape" />
                      <div className="htb-number-text">01</div>
                    </div>
                    <div className="htb-text">
                      <h4>Create a MetaMask Wallet</h4>
                      <p>$KISHU token is available on the Ethereum blockchain. MetaMask is the market leader in ERC20
                      (Ethereum) wallets. On Google Chrome, visit <a href="https://metamask.io/" target="_blank"><strong>metamask.io</strong></a> to download the extension and set up a wallet. On
                      mobile? Get MetaMask's app for <a href="https://metamask.app.link/skAH3BaF99" target="_blank"><strong>iPhone</strong></a> or <a href="https://metamask.app.link/bxwkE8oF99" target="_blank"><strong>Android</strong></a>.</p>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 2" className="tab-pane-tab-2 w-tab-pane">
                  <div className="htb-item">
                    <div className="htb-number"><img src="images/htb-shape-behind-number.png" loading="lazy" alt='pics' className="htb-shape" />
                      <div className="htb-number-text">02</div>
                    </div>
                    <div className="htb-text">
                      <h4 className="heading-3">Send $ETH to MetaMask<br /></h4>
                      <p>Buy Ethereum through MetaMask or transfer it to your MetaMask wallet address from another wallet
                      (e.g. Coinbase or Binance).<br /></p>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 3" className="w-tab-pane">
                  <div className="htb-item">
                    <div className="htb-number"><img src="images/htb-shape-behind-number.png" loading="lazy" alt='pics' className="htb-shape" />
                      <div className="htb-number-text">03</div>
                    </div>
                    <div className="htb-text">
                      <h4 className="heading-3">Visit KISHU Swap<br /></h4>
                      <p>You can currently buy $KISHU on <a href="https://exchange.kishu.com/#/swap?inputCurrency=ETH&outputCurrency=0xa2b4c0af19cc16a6cfacce81f192b024d625817d" target="_blank"><strong>KISHU Swap</strong></a>, KISHU's official decentralized exchange
                      where you can swap any ERC20 token.<br /></p>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 4" className="w-tab-pane">
                  <div className="htb-item">
                    <div className="htb-number"><img src="images/htb-shape-behind-number.png" loading="lazy" alt='pics' className="htb-shape" />
                      <div className="htb-number-text">04</div>
                    </div>
                    <div className="htb-text">
                      <h4 className="heading-3">Swap $ETH for $KISHU<br /></h4>
                      <p>Enter the amount of $ETH you would like to swap for $KISHU. Click <strong>Connect Wallet</strong>
                      then <strong>Swap</strong><br /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="stats" className="stats">
        <div className="container-1800">
          <div className="section-heading is--stats">
            <div className="accent-large">Stats</div>
            <h2 className="h2-what-is-kishu">Tokenomics &amp; Stats</h2>
          </div>
          <div data-w-id="b83854f4-0edc-97bf-60d8-a3002264f569" className="stats-scrolling-container">
            <div className="_2-col-grid bottom-padding is--sticky">
              <div id="w-node-b83854f4-0edc-97bf-60d8-a3002264f56b-52018772" className="left-col">
                <div data-w-id="bbec4ffd-9457-b4fd-d633-2fb6ea1e88f5" className="tokenomics-image"><img src="images/eyeglasses-kishu.png" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, (max-width: 1919px) 46vw, 43vw" alt='pics' className="eyeglasses-kishu" />
                  <div className="floating-elements-container" /><img src="images/floating-elements.png" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw" srcSet="images/floating-elements-p-500.png 500w, images/floating-elements-p-800.png 800w, images/floating-elements.png 895w" alt='pics' className="image-20" />
                </div>
                <div className="tokenomics-image _2"><img src="images/eyeglasses-kishu.png" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, (max-width: 1919px) 46vw, 43vw" srcSet="images/eyeglasses-kishu-p-500.png 500w, images/eyeglasses-kishu-p-800.png 800w, images/eyeglasses-kishu-p-1080.png 1080w, images/eyeglasses-kishu.png 1516w" alt='pics' className="eyeglasses-kishu" />
                  <div className="floating-elements-container"><img src="images/Ellipse-1-copy-7.png" loading="lazy" alt='pics' className="image-9" /><img src="images/Shape-8-copy.png" loading="lazy" alt='pics' className="image-10" /></div>
                </div>
              </div>
              <div id="w-node-b83854f4-0edc-97bf-60d8-a3002264f576-52018772" className="right-col">
                <div data-w-id="f260eb35-8ea4-0380-4a92-2422d676718f" className="tokenomics-text-item">
                  <div className="flex-vertical">
                    <h3 className="red is--tokenomics">$KISHU</h3>
                    <h5 className="gray">TOKEN SYMBOL</h5>
                  </div>
                  <div className="flex-vertical centered">
                    <h3 className="red is--tokenomics">2% Rewards</h3>
                    <h5 className="gray">PER TRANSACTION</h5>
                  </div>
                  <div className="flex-vertical">
                    <h3 className="red is--tokenomics">100 Quadrillion</h3>
                    <h5 className="gray">TOTALY SUPPLY</h5>
                  </div>
                </div>
                <div id="price-chart" data-w-id="911dc789-cd8c-3157-6ceb-b918bd87e7db" className="tokenomics-text-item">
                  <div className="flex-vertical">
                    <h3 id="holders" className="red is--tokenomics">145.000+</h3>
                    <h5 className="gray">HOLDERS</h5>
                  </div>
                  <div className="flex-vertical centered">
                    <h3 id="marketcap" className="red is--tokenomics">500+ Millions $</h3>
                    <h5 className="gray">MARKET CAP</h5>
                  </div>
                  <div className="flex-vertical">
                    <h3 id="price" className="red is--tokenomics">$0.000000005</h3>
                    <h5 className="gray">CURRENT PRICE</h5>
                    <a href="https://www.coingecko.com/en/coins/kishu-inu" target="_blank" className="link">Price Chart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="kishu-swap" data-w-id="aaf63f67-334b-e352-4558-ab85d636bd59" className="kishu-swap">
        <div className="container-1800">
          <div className="section-heading is--swap">
            <div className="accent-large">Swap</div>
          </div>
          <div className="_2-col-grid is--swap">
            <div id="w-node-_88bfb55d-1e28-bbc5-88fe-35f39f0986a2-52018772" className="kishu-swap---text-container">
              <h5>DECENTRALIZED EXCHANGE</h5>
              <h2>Kishu Swap</h2>
              <p className="_w-520">KISHU Swap is our official decentralized exchange (DEX). It gives holders the ability to
              swap any ERC20 token for <br />another one.<br /><br />It is powered by Uniswap, the safest and most trusted DEX
              in the world. Furthermore, it acts as the foundation from which we will build additional features and
              functionality exclusive to KISHU holders.</p>
              <a href="https://exchange.kishu.com/#/swap?inputCurrency=ETH&outputCurrency=0xa2b4c0af19cc16a6cfacce81f192b024d625817d" target="_blank" className="cta-button red-button w-button">OPEN KISHU SWAP</a>
            </div>
            <div data-w-id="144a6b52-a9d9-1231-1db6-5ffa2cee27cf" className="purple-paw-wrapper"><img src="images/purple-paw-2.png" loading="lazy" width={837} sizes="(max-width: 767px) 100vw, (max-width: 1919px) 46vw, 100vw" srcSet="images/purple-paw-2-p-500.png 500w, images/purple-paw-2-p-800.png 800w, images/purple-paw-2.png 837w" alt='pics' className="purple-paw" /><img src="images/screnshot.png" loading="lazy" alt='pics' className="kishu-swap-screenshot" /></div>
          </div>
        </div>
      </section>
      <div id="moonmap" className="moonmap">
        <div className="container-1800">
          <div className="section-heading">
            <div className="accent-large">Liftoff</div>
            <h2 className="h2-moonmap">Moonmap</h2>
            <p className="_w-660 centered">KISHU launched on April 17, 2021 and quickly became one of the fastest growing
            cryptocurrencies of 2021. This Moonmap is a breathing document that lays out key milestones we plan to hit to
            continue our rapid growth.</p>
          </div>
        </div>
        <div data-w-id="239ab2f1-7937-e5fc-7485-1632648133f6" className="moonmap-scrolling-wrapper">
          <div className="moonmap-horiztonal-scrolling-container">
            <div className="sticky-container horizontal">
              <div data-w-id="942a9278-044b-0f8a-f7c5-75c5c9d7c39a" className="flex-horizontal">
                <div className="kishu-rocket-wrapper"><img src="images/kishu-rocket-alone.png" loading="lazy" sizes="(max-width: 479px) 335.99609375px, (max-width: 1919px) 593.828125px, 37vw" srcSet="images/kishu-rocket-alone-p-500.png 500w, images/kishu-rocket-alone.png 791w" alt='pics' className="kishu-rocket" /><img src="images/kishu-rocket-stars.png" loading="lazy" sizes="(max-width: 479px) 335.99609375px, (max-width: 1919px) 671.9921875px, 42vw" srcSet="images/kishu-rocket-stars-p-500.png 500w, images/kishu-rocket-stars-p-800.png 800w, images/kishu-rocket-stars.png 915w" alt='pics' className="rocket-stars" /><img src="images/kishu-rocket-trail.png" loading="lazy" srcSet="images/kishu-rocket-trail-p-500.png 500w, images/kishu-rocket-trail-p-800.png 800w, images/kishu-rocket-trail.png 805w" sizes="(max-width: 479px) 100vw, (max-width: 1919px) 671.9921875px, 42vw" alt='pics' className="rocket-trail" /><img src="images/kishu-rocket-smoke.png" loading="lazy" width="164.5" alt='pics' className="rocket-smoke" /><img src="images/kishu-rocket-space.png" loading="lazy" data-w-id="b901c4bf-ff2e-dbae-ab88-d6aa4c2268f2" sizes="(max-width: 479px) 335.99609375px, (max-width: 1919px) 671.9921875px, 710px" srcSet="images/kishu-rocket-space-p-500.png 500w, images/kishu-rocket-space.png 710w" alt='pics' className="space" /></div>
                <div className="moonmap-phase-wrapper">
                  <div className="phase">
                    <div className="accent-small centered">PHASE 1</div>
                  </div>
                  <div className="phase-details">
                    <h6 className="phase-status">PHASE COMPLETE</h6>
                    <h3 className="phase-name">Launch</h3>
                    <div className="phase-activities">
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark" />
                        <p className="no-bottom-padding">1,000 Holders</p>
                      </div>
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark" />
                        <p className="no-bottom-padding">Website Launch</p>
                      </div>
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark" />
                        <p className="no-bottom-padding">CoinGecko Listing</p>
                      </div>
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark" />
                        <p className="no-bottom-padding">2,000 Telegram Members </p>
                      </div>
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark" />
                        <p className="no-bottom-padding">Community Marketing Fund</p>
                      </div>
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark" />
                        <p className="no-bottom-padding">Marketing Campaign</p>
                      </div>
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark" />
                        <p className="no-bottom-padding">CoinMarketCap Listing</p>
                      </div>
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark" />
                        <p className="no-bottom-padding">5,000 Holders</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="moonmap-phase-wrapper">
                  <div className="phase">
                    <div className="accent-small centered">PHASE 2</div>
                  </div>
                  <div className="phase-details">
                    <h6 className="phase-status">PHASE COMPLETE</h6>
                    <h3 className="phase-name">Growth</h3>
                    <div className="phase-activities">
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark" />
                        <p className="no-bottom-padding">5,000 Telegram Members</p>
                      </div>
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark" />
                        <p className="no-bottom-padding">Website Redesign</p>
                      </div>
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark" />
                        <p className="no-bottom-padding">10,000 Holders</p>
                      </div>
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark" />
                        <p className="no-bottom-padding">10,000 Telegram Members</p>
                      </div>
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark" />
                        <p className="no-bottom-padding">20,000 Holders</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="moonmap-phase-wrapper">
                  <div className="phase">
                    <div className="accent-small centered">PHASE 3</div>
                  </div>
                  <div className="phase-details">
                    <h6 className="phase-status">PHASE COMPLETE</h6>
                    <h3 className="phase-name">Expansion</h3>
                    <div className="phase-activities">
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark" />
                        <p className="no-bottom-padding">KISHU Swap (Decentralize Exchange)<br /></p>
                      </div>
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark" />
                        <p className="no-bottom-padding">Initial CEX Listings (Hotbit, Bilaxy, CoinTiger)<br /></p>
                      </div>
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark" />
                        <p className="no-bottom-padding">15,000 Telegram Members<br /></p>
                      </div>
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark" />
                        <p className="no-bottom-padding">30,000 Holders<br /></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="moonmap-phase-wrapper">
                  <div className="phase">
                    <div className="accent-small centered">PHASE 4</div>
                  </div>
                  <div className="phase-details">
                    <h6 className="phase-status in-progress">IN PROGRESS</h6>
                    <h3 className="phase-name">Utility<br /></h3>
                    <div className="phase-activities">
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark" />
                        <p className="no-bottom-padding">100,000 Holders<br /></p>
                      </div>
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark off" />
                        <p className="no-bottom-padding">KISHU Crate (NFT Marketplace)<br /></p>
                      </div>
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark" />
                        <p className="no-bottom-padding">KISHU Paw Print (Wallet and Passive Income Tracker)<br /></p>
                      </div>
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark off" />
                        <p className="no-bottom-padding">KISHU sWag (Merchandise Store)<br /></p>
                      </div>
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark" />
                        <p className="no-bottom-padding">More CEX Listings<br /></p>
                      </div>
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark" />
                        <p className="no-bottom-padding">50,000 Telegram Members<br /></p>
                      </div>
                      <div className="phase-activity-item"><img src="images/checkmark-green.svg" loading="lazy" alt='pics' className="green-checkmark off" />
                        <p className="no-bottom-padding">Influencer Marketing Partnerships<br /></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="team" className="founding-team">
        <div className="container-1800">
          <div className="section-heading is--team">
            <div className="accent-large">Team</div>
          </div>
          <div className="_2-col-grid offset-up">
            <div id="w-node-_5f653208-8b22-cc29-2ef1-5f821570ca56-52018772" className="founding-team-img-wrapper"><img src="images/background-shape.png" loading="lazy" width={884} sizes="(max-width: 767px) 100vw, (max-width: 991px) 34vw, (max-width: 1919px) 46vw, 100vw" srcSet="images/background-shape-p-500.png 500w, images/background-shape-p-800.png 800w, images/background-shape.png 857w" alt='pics' className="founding-team-img" /><img src="images/08-v2-big.gif" loading="lazy" alt='pics' className="image-21" />
            </div>
            <div className="founding-team-text-wrapper">
              <h2 className="h2-founding-team">Founding<br />Team</h2>
              <p className="_w-660">KISHU was founded by a 2-person team that has since expanded into 20+ community managers
              with expertise in marketing and product development. Feel free to say "Hi!" on Telegram.</p>
              <div className="founding-members">
                <div className="founding-member-item">
                  <div className="founding-member-image-container"><img src="images/object12x.png" loading="lazy" alt='pics' className="image-16" /></div>
                  <div className="founding-member-text">
                    <h4>Kishu Man</h4>
                    <p>Co-Founder | Head of Operations</p>
                    <a href="https://t.me/Kishu_Inu" target="_blank" className="social-icon-item is--founder w-inline-block">
                      <div className="fa-social-icon is--founder"></div>
                    </a>
                  </div>
                </div>
                <div className="founding-member-item">
                  <div className="founding-member-image-container"><img src="images/object32x.png" loading="lazy" alt='pics' className="image-16" /></div>
                  <div className="founding-member-text">
                    <h4>Inu Dev</h4>
                    <p>Co-Founder | Lead Developer</p>
                    <a href="https://t.me/InuDev" target="_blank" className="social-icon-item is--founder w-inline-block">
                      <div className="fa-social-icon is--founder"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="donate" className="donate">
        <div className="container-1800">
          <div className="section-heading is--donate">
            <div className="accent-large">Donate</div>
          </div>
          <div className="_2-col-grid is--donate">
            <div id="w-node-_4cfe832b-f15b-0fee-a5f2-47da4f1898fd-52018772" className="donate-text-wrapper">
              <h2>Feel like <br />donating?</h2>
              <p className="_w-520 is--token-code">As a community-powered project, KISHU runs thanks to its amazing volunteers
              and generous donors. If you would like to pitch in, use the official ERC20 donation wallet
              here:<br />‍<br /><strong className="bold-text">0xB7852D285f31B740318CAb51Bd0E5E7936073725<br /></strong><br /><strong>Accepted</strong>:
              Any ERC20 token<br /><strong>Preferred</strong>: $ETH, $USDC, $KISHU</p>
              <a href="https://etherscan.io/address/0xb7852d285f31b740318cab51bd0e5e7936073725" target="_blank" className="cta-button red-button w-button">View on etherscan</a>
            </div>
            <div id="w-node-_4cfe832b-f15b-0fee-a5f2-47da4f1898fb-52018772" className="donate-imgs"><img src="images/donate-qr-code.png" loading="lazy" width={884} sizes="(max-width: 767px) 100vw, (max-width: 1919px) 46vw, 100vw" srcSet="images/donate-qr-code-p-500.png 500w, images/donate-qr-code.png 777w" alt='pics' className="donate-qr-code" /><img src="images/09-big.gif" loading="lazy" width="260.5" alt='pics' className="sleeping-kishu" /></div>
          </div>
          <div className="press-logos-wrapper">
            <a id="w-node-_8d5d293f-b1a7-74ff-1732-75fc22a0ef52-52018772" href="https://www.newsweek.com/buy-kishu-inu-new-crypto-dogecoin-big-brother-1590404" target="_blank" className="press-logo-item w-inline-block"><img src="images/newsweek-logo-vector2x.png" loading="lazy" width={347} sizes="(max-width: 479px) 100vw, (max-width: 1919px) 22vw, 346.9921875px" alt='pics' className="press-logo" /></a>
            <a id="w-node-_5b3309ca-e69c-4f7e-afe2-342d4be4e06e-52018772" href="https://www.thesun.co.uk/money/14953721/how-risky-is-kishu-inu/" target="_blank" className="press-logo-item w-inline-block"><img src="images/sunmasthead2x.png" loading="lazy" width={174} alt='pics' className="press-logo" /></a>
            <a id="w-node-_6f2d8d68-fceb-992f-b7a7-37bcffd1a88f-52018772" href="https://gothammag.com/kishu-inu-times-square" target="_blank" className="press-logo-item w-inline-block"><img src="images/GOTH_cover_white2x.png" loading="lazy" width={210} alt='pics' className="press-logo" /></a>
            <a id="w-node-_2f860849-106d-97cf-9d22-ef4e2a2335ee-52018772" href="https://mensbook.com/kishu-in-cryptocurrency" target="_blank" className="press-logo-item w-inline-block"><img src="images/MENSBOOK_black2x.png" loading="lazy" width={347} sizes="(max-width: 479px) 100vw, (max-width: 1919px) 22vw, 346.9921875px" alt='pics' className="press-logo" /></a>
          </div>
        </div>
      </section>
      <div id="follow" className="footer">
        <div className="footer-relative-wrapper">
          <div className="footer-bg-imgs"><img src="images/Vector-Smart-Object2x.png" loading="lazy" width={380} sizes="(max-width: 479px) 100vw, 380px" alt='pics' className="unicorn-kishu" /></div>
          <div className="logo-and-social-wrapper">
            <div className="logo-white" />
            <div className="social-icons">
              <a href="https://t.me/kishuinucommunity" target="_blank" className="social-icon-item w-inline-block">
                <div className="fa-social-icon"></div>
              </a>
              <a href="https://www.reddit.com/r/KishuInu/" target="_blank" className="social-icon-item w-inline-block">
                <div className="fa-social-icon"></div>
              </a>
              <a href="https://twitter.com/inukishu?lang=en" target="_blank" className="social-icon-item w-inline-block">
                <div className="fa-social-icon"></div>
              </a>
              <a href="https://www.instagram.com/inukishu/?hl=en" target="_blank" className="social-icon-item w-inline-block">
                <div className="fa-social-icon"></div>
              </a>
              <a href="https://www.youtube.com/results?search_query=kishu+inu" target="_blank" className="social-icon-item w-inline-block">
                <div className="fa-social-icon"></div>
              </a>
              <a href="https://medium.com/coinmonks/kishu-inu-token-everything-about-it-798dc0ae6a43" target="_blank" className="social-icon-item w-inline-block">
                <div className="fa-social-icon"></div>
              </a>
              <a href="https://github.com/Kishu-Inu/Kishu-Inu-Contracts" target="_blank" className="social-icon-item w-inline-block">
                <div className="fa-social-icon"></div>
              </a>
              <a href="https://discord.gg/kishuinucommunity" target="_blank" className="social-icon-item w-inline-block">
                <div className="fa-social-icon"></div>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className="white">Copyright © 2021, Kishu Inu</p>
        </div>
      </div>
    </>

  )
}

export default App
