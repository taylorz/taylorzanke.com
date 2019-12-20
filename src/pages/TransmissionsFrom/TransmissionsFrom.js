import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './TransmissionsFrom.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import PageContainer from '../../components/PageContainer/PageContainer';
import WorkImage from '../../components/WorkImage/WorkImage';
import TextBlock from '../../components/TextBlock/TextBlock';

import WORKS from '../../constants/works/works';

const TransmissionsFromWork = WORKS[0];

class TransmissionsFrom extends Component {
  state = {
    menuOpened: false,
  }
  toggleMenu() {
    this.setState({
      menuOpened: !this.state.menuOpened,
    });
  }
  render() {
    return (
      <>
        <SiteWrapper menuState={this.state.menuOpened ? "menu-opened" : "menu-closed"}>
          <Menu onClick={() => this.toggleMenu()}/>
          <PageContainer className="work-page transmissions-from" onClick={this.state.menuOpened ? () => this.toggleMenu() : null}>
          <Header
            onClick={() => this.toggleMenu()}
            context="Taylor Zanke"
            contextLink="/"
            workDetail={`
              ${TransmissionsFromWork.title},
              ${TransmissionsFromWork.year},
              ${TransmissionsFromWork.object}.
              ${TransmissionsFromWork.dimensions}.
              ${TransmissionsFromWork.details}
            `}
            toggler="Menu"
          />
          {TransmissionsFromWork.images.map((image) =>
            <WorkImage image={image}/>
          )}
          <TextBlock
            blockOne='Over a number of months I completed the series of drawings found in this book. They are composites of two separate but related analytical procedures. Together they reveal the basis for an architectural language which addresses a fundamental concern of space and its relationship to time: the instant where existing and introduced meet. They present a path for thinking about space which uses this event as a means for conceptualizing a new architectural language. Through this focus the drawings also serve as a starting point for a discussion about a number of other concerns, not all of which are directly spatial, but indeed come to bear spatial significance. The drawings use two lines of different character, one which is gestural and one which is sharp, in order to elongate the duration of time across which the spaces depicted are formed and provide a means for expressing this duration. This not only allows a deeper analysis of the way in which the compositions emerge and become defined, but also presents an approach to rendering space which is rambling, wobbly, and uncertain, rather than rationalized, definite, and exacting. It is thus through the frame of looseness, and its implied rejection of rationalization as the only means for defining space, that I seek to present and focus on one of the many, but arguably most important, descendant concerns of the meeting between existing and introduced: an architectural language of potential.'
            blockTwo='These drawings introduce a method for developing space which is adjusted away from traditional techniques for doing so by positing the role of matter differently. In a traditional architectural exercise matter is introduced in order to define space. In this scenario, the forming of space is a process of eliminating potential and introducing certainty. It is a process of design where decisions about where to deposit matter are made, repeatedly, and so on and so forth, architecture is formed. The production of architectural space is indeed a derivative of the procedure of filling space, enclosed space is made from the surrounding of it with hard matter. However, an architectural language of potential is not concerned, primarily, with where to put the matter, but with what energy can be preserved within it. This architecture is not necessarily a means for enclosing space but strives to preserve the capacities of space to become. An architecture of potential is interested in how space can be constructed with matter that does not always seek to fill, but with matter that participates in the production of that space’s capacity to be something other than architecture. This is the imbuing of hard matter with soft potential, and the freeing of physical material from acting only as a derivative force whose purpose is to enclose space. It allows it to be a shapeable substance of unfolding possibility. Hard matter here is no longer a boundary against which the soft emotion must push or be contained by, but becomes a supportive force, using its fixity to encourage and prolong the unfolding of time and possibility held inside. Recasting of the role of matter is the basis for the technique of mark-making here shown in the drawings and the development of an architectural language attuned to these issues.'
            blockThree='This new role for matter is addressed in the form of my drawings in several ways. The two characters of line present throughout are in obvious dialogue with one another. They are also of clearly distinct modes. The gestural line stakes out a boundary on the page. It moves across space intuitively, marking a map. These lines form variable edges, and in layers of pressure they form depth. Matter here holds sensation, and it builds upon itself. I see the quality of these lines is rough and I understand that they are this way as a result of sensing something within myself. Simultaneously, through the line, I sense and describe. By means of their shake and contour these lines unfurl an emotional within into material. I think about architecture as I draw and so these wobbly lines mark possible architecture. They are precarious and easily erased. They are delicate and inconclusive yet posses their own internal legibility. They are spaces which have potential, and matter works to gently hold it. The sharp line emphasizes and supports what is expressed in the gesture. It strengthens boundaries loosely established and responds to hidden intent. It seeks out space systematically, measuring and marking the terrain. These lines form masses, they suggest structure, they imply a system for strengthening space. They use the space existing around them for their own purposes. Indeed, these lines recall the language of the line which they respond to, as well as suggest new capacities for the space into which they are introduced. Though internally precise, their interrelation with the gestural line is not. A general quality of improvisation is preserved and strengthened by their contrast. The precise line shows that, in dialogue with the gestural, the addition of matter here is accretive. Their interrelation plays to the tendency of matter to create density and produce weight when it is introduced. Like a celestial body slowly forming. The formal language of these lines together demonstrates a method for introducing stability which does not rely on attitudes of certainty, which eliminate the potentials of space. Instead it allows, through the loose relationship between line and boundary, depth and mass, gesture and precision, an attitude for describing space which increases its capacity for potential. Existing context and introduced material settle slowly into composition through conscientious support of what is unfolding.'
            blockFour='Through the introduction of these two types of line, and the analysis of their respective characters, I have sought to make process out of a relation between existing and introduced. This is an outcome extended from the recasting of matter from that which boundaries and is rationalized to that which is capacitive and is loose. By understanding the possibility latent in all material, and tuning a sensitivity towards it, a reversal of roles can occur between what is and what could be. The relation between existing and introduced can be a starting point for space, rather than a subsequent condition which unfolds only at a later time. My drawings both introduce an existing condition and respond to it, and as a result present their own architectural language for navigating time. Unfurling an inner existing, as I have done here in drawn line, and responding to its condition, rather than seeking to rationalize it, allows the gestural to persist and be strengthened. Accretion of matter in relation to, rather than in place of, builds further potential rather than rationalizes initial potential. Architectural works of certainty, concerned with boundarying matter, are loosened only by time. Once the potential for space is eliminated through the introduction of architecture only decay can reintroduce possibility. The rambling, wobbly, uncertain space, a capacitive matter, is created over long stretches of time, through the degradation of the language with which the matter had been constructed. The roof falls in, the wall shifts, a window is broken. The representation of time’s effects as an inventive tool is a further characteristic of an architectural language of potential. My drawings introduce a version of the decayed outcome as a starting point. Memory rot shapes the matter of possibility into variable edges and rough lines. A roof appears to be in need of repair, the wall warps away, windows roughly opened.'
            blockFive='An architectural language of potential is an architectural language which sees as its fundamental concern the strengthening of sensations of peace and possibility. It seeks also to introduce a method for thinking about space which allows these sensations to persist without being limited by rationalization and certainty. It seeks instead to find a mode of expression which stabilizes without closing and materializes while retaining capacity. These drawings depict a condition where the existing is perpetually recast and as a result is the site for boundless possibility. The existing is redrawn in order to capture whatever capacities are present, to support potentials. The accretive procedure is tuned through the application of a varied line. Mass and boundary form, swirling into shape, from internal languages developed through loose propositions, from possible architectures, from endless withins, into matter. Inverted decay finds itself the center of possible futures. In these drawings I seek to articulate a method for the existing and the introduced to become, together, a continuous gestural architecture.'
          />
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default TransmissionsFrom;
