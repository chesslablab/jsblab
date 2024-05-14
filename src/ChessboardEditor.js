import {
  PIECE
} from 'https://cdn.jsdelivr.net/npm/@chesslablab/cmblab@0.0.1/src/index.min.js';

import AbstractComponent from '../src/AbstractComponent.js';

export class ChessboardEditor extends AbstractComponent {
  mount() {
    this.props.chessboard.context.addEventListener('mousedown', (event) => {
      event.preventDefault();
      if (event.button == 0) {
        this.props.sq = event.target.getAttribute('data-square');
        this.props.modal.show();
      }
    });

    this.props.pieces.addEventListener('mousedown', (event) => {
      event.preventDefault();
      if (event.button == 0) {
        const piece = event.target.getAttribute('xlink:href');
        if (piece) {
          this.props.chessboard.setPiece(this.props.sq, PIECE[piece.substring(1)]);
          this.props.modal.hide();
        }
      }
    });
  }
}