const { Model } = require("sequelize/types");

const CampgroundChecklist = require('Campground_checklist');
const CampgroundPost = require('Campground_post');
const Comment = require('Comment');
const TrailChecklist = require('Trail_checklist');
const TrailPost = require('Trail_post');
const User = require('User');

module.exports = {CampgroundChecklist,CampgroundPost,Comment,TrailChecklist,TrailPost,User}