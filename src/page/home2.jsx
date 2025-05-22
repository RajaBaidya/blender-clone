import React from 'react';
import '../style/home.css';

function Home2() { 
    return (
        <>          

            {/* Blender Development section */}
            <div className="home2">
                <div className="home2-container">
                    <h2 className="news-title">Blender Development</h2>
                </div>
                <div className="news-container">
                    <div className="news-card3">
                        <img src="image/declarative_systems_geometry_nodes-480x270.jpg" alt="BLENDER CONFERENCE" />
                        <div className="news-info">
                            <span className="news-tag">Declarative Systems in Geometry Nodes</span>
                            <p className="news-desc">The future of building high level user-friendly procedural tools with Geometry Nodes.</p>
                        </div>
                    </div>
                    <div className="news-card3">
                        <img src="image/survey_2024-480x270.jpg" alt="BLENDERHEADS" />
                        <div className="news-info">
                            <span className="news-tag">Winter of Quality 2025</span>
                            <p className="news-desc">During the 2024–2025 winter (northern hemisphere), Blender developers focused on quality and stability.</p>
                        </div>
                    </div>
                    <div className="news-card3">
                        <img src="image/layered-animation-2024-480x270.png" alt="USER STORY" />
                        <div className="news-info">
                            <span className="news-tag">Layered Animation Workshop 2024</span>
                            <p className="news-desc">The Animation & Rigging module workshop at Blender Conference 2024 focused on creating a minimal viable product for layered animation workflows.</p>
                        </div>
                    </div>
                    <div className="news-card3">
                        <img src="image/Overrides_worshop_cropped-480x270.jpg" alt="USER STORY" />
                        <div className="news-info">
                            <span className="news-tag">The Future of Overrides</span>
                            <p className="news-desc">Next steps for overrides: how to make them easier to use and manage.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blender Studio section */}
            <div className="home2">
                <div className="home2-container">
                    <h2 className="news-title">Blender Development</h2>
                </div>
                <div className="news-container">
                    <div className="news-card3">
                        <img src="image/3bdf9a29a43b1e4758d1b01e00ea3acc.jpg" alt="BLENDER CONFERENCE" />
                        <div className="news-info">
                            <span className="news-tag">Declarative Systems in Geometry Nodes</span>
                            <p className="news-desc">The future of building high level user-friendly procedural tools with Geometry Nodes.</p>
                        </div>
                    </div>
                    <div className="news-card3">
                        <img src="image/a6e336915a1c355f98f22fb1a46f33d4.jpg" alt="BLENDERHEADS" />
                        <div className="news-info">
                            <span className="news-tag">Winter of Quality 2025</span>
                            <p className="news-desc">During the 2024–2025 winter (northern hemisphere), Blender developers focused on quality and stability.</p>
                        </div>
                    </div>
                    <div className="news-card3">
                        <img src="image/472348208d813ff89443effcb97fcaf2.jpg" alt="USER STORY" />
                        <div className="news-info">
                            <span className="news-tag">Layered Animation Workshop 2024</span>
                            <p className="news-desc">The Animation & Rigging module workshop at Blender Conference 2024 focused on creating a minimal viable product for layered animation workflows.</p>
                        </div>
                    </div>
                    <div className="news-card3">
                        <img src="image/1b997968f136da3c88b8c841089842bb.jpg" alt="USER STORY" />
                        <div className="news-info">
                            <span className="news-tag">The Future of Overrides</span>
                            <p className="news-desc">Next steps for overrides: how to make them easier to use and manage.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Free and Open Source section */}
            <div className="home3">
                <div className="home3-container">
                    <div className="home3-innercontainer">
                        <div className="home3-text">
                            <p className="home3-text1">Free and Open Source</p>
                            <p className="home3-text2">Blender is a public project hosted on blender.org, licensed as GNU GPL, owned by its contributors.</p>
                            <p className="home3-text2">For that reason Blender is Free and Open Source software, forever. Learn more</p>
                        </div>
                        <div className="home3-image">
                            <img src="../icon/blender_fund_hex-e1629996297522.png" alt="logo" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Part of the industry section */}
            <div className="home4">
                <div className="home4-container">
                    <div className="home4-innercontainer">
                        <div className="home4-text">
                            <p className="home4-text1">Part of the industry</p>
                        </div>
                        <p className="home4-text2">Blender is a member of ASWF, Khronos, Linux Foundation and OIN. It’s also well supported by major hardware vendors such as AMD, Apple, Intel, and NVIDIA.</p>
                        <div className="home4-image">
                            <img src="../icon/khronos.png" alt="logo" />
                            <img src="../icon/linux_foundation.png" alt="logo" />
                            <img src="../icon/open_invention_network.png" alt="logo" />
                            <img src="../icon/academy_software_foundation.png" alt="logo" />
                        </div>
                    </div>
                </div>
            </div>

            {/* It's about people section */}
            <div className="home5">
                <div className="home5-container">
                    <div className="home5-innercontainer">
                        <p className="home5-text1">It’s about people.</p>
                        <p className="home5-text2">Designers, developers, engineers, artists. All driven by passion. All using Blender to make an impact.</p>
                        <div className="home5-imagecontent">
                            <div className="home5-image">
                                <img src="image/blender_today_pablo.jpg" alt="BLENDER CONFERENCE" />
                                <div className="news-info">
                                    <p className="news-desc">Connecting Blender Community</p>
                                </div>
                            </div>
                            <div className="home5-image">
                                <img src="image/daniel_martinez_lara_annecy.jpg" alt="BLENDER CONFERENCE" />
                                <div className="news-info">
                                    <p className="news-desc">Showcasing Blender at industry events</p>
                                </div>
                            </div>
                            <div className="home5-image">
                                <img src="image/creating_worlds_ian_hubert.jpg" alt="BLENDER CONFERENCE" />
                                <div className="news-info">
                                    <p className="news-desc">Creating Worlds at BCON19</p>
                                </div>
                            </div>
                            <div className="home5-image">
                                <img src="image/nodevember.jpg" alt="BLENDER CONFERENCE" />
                                <div className="news-info">
                                    <p className="news-desc">The demo scene is back with Nodevember</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Ecosystem section */}
            <div className="home6">
                <div className="home6-container">
                    <div className="home6-image">
                        <div className="home6-innercontainer1">
                            <h1 className="home6-headtext">The Ecosystem</h1>
                            <p className="home6-subtext">Countless communities and thriving businesses are built around Blender.</p>
                            <p className="home6-subtext">Together, these tutorial makers and content creators, add-on developers and global marketplaces form an ever-expanding ecosystem.</p>
                            <a className="home6-subtext1">Find Blender Communities</a>
                        </div>
                        <div className="home6-innercontainer2"></div>
                    </div>
                </div>
            </div>

            {/* Everything You Need section */}
            <div className="home7">
                <div className="home7-container">
                    <div className="home7-title">Everything You Need</div>
                    {/* Right side */}
                    <div className="home7-content">
                        <div className="home7-textbox">
                            <h2 className="home7-headtext">Cycles Render Engine</h2>
                            <p className="home7-subtext">Cycles is Blender’s built-in powerful unbiased path-tracer engine that offers stunning ultra-realistic rendering.</p>
                            <p className="home7-subtext1">Real-time viewport preview</p>
                            <p className="home7-subtext1">CPU & GPU rendering</p>
                            <p className="home7-subtext1">PBR shaders & HDR lighting support</p>
                            <p className="home7-subtext1">VR rendering suppor</p>
                        </div>
                        <div className="home7-imagebox">
                            <img src="image/blender_render-1280x720.jpg" alt="3D MODELING" />
                        </div>
                    </div>
                    {/* Left side */}
                    <div className="home7-content1">
                        <div className="home7-imagebox1">
                            <img src="image/modeling02-1280x720.jpg" alt="3D MODELING" />
                        </div>
                        <div className="home7-textbox1">
                            <h2 className="home7-headtext">Cycles Render Engine</h2>
                            <p className="home7-subtext">Cycles is Blender’s built-in powerful unbiased path-tracer engine that offers stunning ultra-realistic rendering.</p>
                            <p className="home7-subtext1">Real-time viewport preview</p>
                            <p className="home7-subtext1">CPU & GPU rendering</p>
                            <p className="home7-subtext1">PBR shaders & HDR lighting support</p>
                            <p className="home7-subtext1">VR rendering support</p>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className="home7-content">
                        <div className="home7-textbox">
                            <h2 className="home7-headtext">Cycles Render Engine</h2>
                            <p className="home7-subtext">Cycles is Blender’s built-in powerful unbiased path-tracer engine that offers stunning ultra-realistic rendering.</p>
                            <p className="home7-subtext1">Real-time viewport preview</p>
                            <p className="home7-subtext1">CPU & GPU rendering</p>
                            <p className="home7-subtext1">PBR shaders & HDR lighting support</p>
                            <p className="home7-subtext1">VR rendering suppor</p>
                        </div>
                        <div className="home7-imagebox">
                            <img src="image/blender_vfx-1280x720.jpg" alt="3D MODELING" />
                        </div>
                    </div>
                    {/* Left side */}
                    <div className="home7-content1">
                        <div className="home7-imagebox1">
                            <img src="image/animation01-1280x720.jpg" alt="3D MODELING" />
                        </div>
                        <div className="home7-textbox1">
                            <h2 className="home7-headtext">Cycles Render Engine</h2>
                            <p className="home7-subtext">Cycles is Blender’s built-in powerful unbiased path-tracer engine that offers stunning ultra-realistic rendering.</p>
                            <p className="home7-subtext1">Real-time viewport preview</p>
                            <p className="home7-subtext1">CPU & GPU rendering</p>
                            <p className="home7-subtext1">PBR shaders & HDR lighting support</p>
                            <p className="home7-subtext1">VR rendering support</p>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className="home7-content">
                        <div className="home7-textbox">
                            <h2 className="home7-headtext">Cycles Render Engine</h2>
                            <p className="home7-subtext">Cycles is Blender’s built-in powerful unbiased path-tracer engine that offers stunning ultra-realistic rendering.</p>
                            <p className="home7-subtext1">Real-time viewport preview</p>
                            <p className="home7-subtext1">CPU & GPU rendering</p>
                            <p className="home7-subtext1">PBR shaders & HDR lighting support</p>
                            <p className="home7-subtext1">VR rendering suppor</p>
                        </div>
                        <div className="home7-imagebox">
                            <img src="image/hero_p31_screenshot-1280x720.jpg" alt="3D MODELING" />
                        </div>
                    </div>
                    {/* Left side */}
                    <div className="home7-content1">
                        <div className="home7-imagebox1">
                            <img src="image/vse_custom_grade-1280x720.jpg" alt="3D MODELING" />
                        </div>
                        <div className="home7-textbox1">
                            <h2 className="home7-headtext">Cycles Render Engine</h2>
                            <p className="home7-subtext">Cycles is Blender’s built-in powerful unbiased path-tracer engine that offers stunning ultra-realistic rendering.</p>
                            <p className="home7-subtext1">Real-time viewport preview</p>
                            <p className="home7-subtext1">CPU & GPU rendering</p>
                            <p className="home7-subtext1">PBR shaders & HDR lighting support</p>
                            <p className="home7-subtext1">VR rendering support</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-upper">
                <h3>The Freedom to Create.</h3>
                <button className="footer-btn">Download Blender</button>
            </div>

        </>
    );
}

export default Home2;