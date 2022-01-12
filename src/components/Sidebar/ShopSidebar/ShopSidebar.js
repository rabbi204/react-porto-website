import React from 'react';
import './ShopSidebar.css';

function ShopSidebar() {
    return (
        <div>
            <div className="shop-siderbar">
                <div className="shop-widget">
                    <h3 className="shop-widget-title">Search Product</h3>
                    <input type="text" />
                </div>
                <div className="shop-widget">
                    <h3 className="shop-widget-title">Categories</h3>
                    <ul className="widget-list checklist">
                        <li><input type="checkbox" id='men' /><label htmlFor="men">Men</label></li>
                        <li><input type="checkbox" id='women' /><label htmlFor="women">Women</label></li>
                        <li><input type="checkbox" id='electronics' /><label htmlFor="electronics">Electronics</label></li>
                        <li><input type="checkbox" id='camera' /><label htmlFor="camera">Camera</label></li>
                        <li><input type="checkbox" id='backpack' /><label htmlFor="backpack">Backpack</label></li>
                    </ul>
                </div>
                <div className="shop-widget">
                    <h3 className="shop-widget-title">Brands</h3>
                    <ul className="widget-list checklist">
                        <li><input type="checkbox" id='apple' /><label htmlFor="apple">Apple</label></li>
                        <li><input type="checkbox" id='vivo' /><label htmlFor="vivo">Vivo</label></li>
                        <li><input type="checkbox" id='samsung' /><label htmlFor="samsung">Samsung</label></li>
                        <li><input type="checkbox" id='hp' /><label htmlFor="hp">HP</label></li>
                        <li><input type="checkbox" id='max' /><label htmlFor="max">Max</label></li>
                    </ul>
                </div>
                <div className="shop-widget">
                    <h3 className="shop-widget-title">Tags</h3>
                    <ul className="widget-list tag-list">
                        <li><a href="#">Eid</a></li>
                        <li><a href="#">Pohela Baishak</a></li>
                        <li><a href="#">Qurbani</a></li>
                        <li><a href="#">Covid</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default ShopSidebar;
