import React from 'react';
import { ReactComponent as Blackboard } from './blackboard.svg';
import { ReactComponent as Macbook } from './macbook.svg';
import { ReactComponent as Pencil } from './pencil.svg';
import './CardList.scss';
import { Grid } from '@material-ui/core';

const CardList = () => {
  return (
    <div className="card-list">
      <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className="card">
            <div className="card__icon-container">
              <Blackboard className="card__icon card__icon--blue" />
            </div>
            <div>
              <h3>Blue</h3>
              <p>
                Blue is the color of the sky and sea. It is often associated
                with depth and stability. It symbolizes trust, loyality, wisdom,
                confidence, intelligence, faith, truth, and heaven.
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className="card">
            <div className="card__icon-container">
              <Macbook className="card__icon card__icon--green" />
            </div>
            <div>
              <h3>Green</h3>
              <p>
                Green is the color of nature. It symbolizes growth, harmony,
                freshness, and fertility. Green has strong correspondance with
                safety.
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className="card">
            <div className="card__icon-container">
              <Pencil className="card__icon card__icon--red" />
            </div>
            <div>
              <h3>Red</h3>
              <p>
                Red is the color of fire and blood, so it is associated with
                energy, wat, danger, strength, power, determination as well as
                passion, desire, and love.
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardList;
