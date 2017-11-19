import React, { Component } from 'react';
import './App.css';

class Search extends Component {
  render() {
    return (
      <div id="wrap-page" class="header-style-header--transparent">
      <header id="header" className="header header--transparent header-desktop" data-break-mobile="1200">
      <div className="header__inner">
        <div className="wo__container">
          <div className="header__content">
            <div className="header__logo"> <a href="#"> <img src="./img/logo_3.png" alt="SDG8" /> </a> </div>
            <div className="header__actions">
              <div className="header__add-listing disable">
                <div className="tb">
                  <div className="tb__cell"> 
                  <a href="#">
                    <span>
                      Nigeria
                    </span>
                  </a> 
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section id="main">
      <div className="container">
        <div data-vc-full-width="true" data-vc-full-width-init="true" data-vc-video-bg="https://www.youtube.com/watch?v=WoZQ0ivvW7E" className="vc_row wpb_row vc_row-fluid vc_custom_1504945309382 vc_row-has-fill vc_video-bg-container" style={{padding: "0px 206.5px", position: "relative", left: "-206.5px", boxSizing: "borderBox", width: "1583px"}}>
          <div className="vc_video-bg vc_hidden-xs">
            
            <iframe className="inner video" frameborder="0" allowfullscreen="1" gesture="media" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/WoZQ0ivvW7E?autoplay=1&loop=1&showinfo=0&controls=0&disablekb=1&&playlist=WoZQ0ivvW7E"></iframe>
          </div>
          <div className="overlay" style={{ backgroundColor: "rgba(30, 31, 45, 0.805)" }}> </div>
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper">
                <div className="header-page-form header-page-form-not_center_3 header-page-form-has-category header-page--high header-page-banner-enable header-page-search-enable">
                  <div className="header-page-form__inner">
                    <div className="header-page-form-banner">
                      <div className="header-page__banner">
                        <p className="banner__description">Find the best places and people to make your tour experience more awesome</p>
                      </div>
                      <div className="header-page__categories header-page__categories-s2">
                        <div className="header-page__categories-inner"> 
                          <span className="header-page__categories-label"> Or browse the highlights 
                            <img src="./img/icon-arrow-round.png" alt="Icon" width="87" height="100" /> 
                          </span> 
                        
                        <a href=""> <span className="header-page__category-icon"><img src="./img/dinner.png" alt="Dinner" width="40" height="40" /> </span> <span className="header-page__category-title">Dinner</span> </a> 
                        
                        <a href=""> <span className="header-page__category-icon"><img src="./img//destinations.png" alt="Destinations" width="40" height="40" /> </span> <span className="header-page__category-title">Destinations</span> </a>              
                        
                        <a href=""> <span className="header-page__category-icon"><img src="./img/breakfast.png" alt="Breakfast" width="40" height="40" /> </span> <span className="header-page__category-title">Tour Guide</span> </a> </div>
                      </div>
                    </div>
                    <div className="header-page-form-search">
                      <div className="form-high form-transparent is-saprated-searchform">
                        <form action="" method="GET" id="listgo-searchform" className="form form--listing ">
                          <h3 className="wiloke-searchform-title">Search SDG8 and Beyond</h3>
                          
                          <div className="form-item item--search col-md-6">
                            <label for="s_search" className="label">Country</label>
                            <span className="input-text input-icon-inside">
                            <select name="s_country" class="form-control crs-country" data-region-id="state" id="country">
                              <option>Nigeria</option>
                            </select>
                            </span> 
                           </div>
                           
                           <div className="form-item item--search col-md-6">
                            <label className="label">State</label>
                            <span className="input-text input-icon-inside">
                            <select name="s_state" id="state">
                              <option>Lagos</option>
                            </select>
                            </span> 
                           </div>
                           
                           <div className="form-item item--search col-md-6">
                            <label className="label">City</label>
                            <span className="input-text input-icon-inside">
                            <select name="s_city">
                              <option></option>
                            </select>
                            </span> 
                           </div>
                           
                           <div className="form-item item--search col-md-6">
                            <label className="label">Category</label>
                            <span className="input-text input-icon-inside">
                            <select name="s_category">
                              <option value="Diner">Dinner</option>
                              <option value="Destinations">Destinations</option>
                              <option value="Tour Guide">Tour Guide</option>
                            </select>
                            </span> 
                           </div>
                           
                           <div className="form-item item--search col-md-12">
                            <label className="label">Search</label>
                            <span className="input-text input-icon-inside">
                            <input id="s_search" type="text" name="s_search" value="" />
                            </span> 
                           </div>
                          <div className="form-item item--submit">
                            <input type="submit" value="Search Now" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    );
  }
}

export default Search;
