/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import React, { useContext, useEffect, useState } from 'react';
import { LeftOutlined, RightOutlined, SearchOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import { Layout, Heading, Section } from 'components';
import '@ant-design/compatible/assets/index.css';
import { Row, Col, BackTop, Input, Typography } from 'antd';
import { baseStyles } from 'styles/base';
import styled, { keyframes } from 'styled-components';
import './style.css';
import pencil_0 from 'assets/icons/0_pencil.svg';
import pencil_1 from 'assets/icons/1_pencil.svg';
import pencil_2 from 'assets/icons/2_pencil.svg';
import download_ from 'assets/icons/download.svg';
import eraser_ from 'assets/icons/eraser.svg';
import note from 'assets/icons/note.svg';
import photo from 'assets/icons/photo.svg';
import redo_ from 'assets/icons/redo.svg';
import shapes from 'assets/icons/shapes.svg';
import undo_ from 'assets/icons/undo.svg';
import zoomin from 'assets/icons/zoom-in.svg';
import zoomout from 'assets/icons/zoom-out.svg';
import $ from 'jquery';
import { jsPDF } from 'jspdf';
import { html2canvas } from 'html2canvas';

let hamburger;
let toolsDisplay = true;
let colors = ['#000000', '#eb3b5a', '#3867d6']; //black,red,blue
let colorNumber = 0;
let currColor = '#000000';
var pencilSlider;
let eraserSlider;
let pencil;
let eraser;
var pencilTarget;
var eraserTarget;
let sticky;
let stickyNoteNumber = 0;
let upload;
let canvas;
let undoRedoTracker = [];
let track = 0;
let undo;
let redo;
let tool;
let mouseDown = false;
let download;
function updateUndoRedoDisabledClass() {
	if (track <= 0) {
		undo.classList.add('disabled');
	} else {
		undo.classList.remove('disabled');
	}

	if (track < undoRedoTracker.length - 1) {
		redo.classList.remove('disabled');
	} else {
		redo.classList.add('disabled');
	}
}
function getPDF() {
	var HTML_Width = $('.canvas_div_pdf').width();
	var HTML_Height = $('.canvas_div_pdf').height();
	var top_left_margin = 15;
	var PDF_Width = HTML_Width + top_left_margin * 2;
	var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
	var canvas_image_width = HTML_Width;
	var canvas_image_height = HTML_Height;

	var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

	html2canvas($('.canvas_div_pdf')[0], { allowTaint: true }).then(function (canvas) {
		canvas.getContext('2d');

		console.log(canvas.height + '  ' + canvas.width);

		var imgData = canvas.toDataURL('image/jpeg', 1.0);
		var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
		pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);

		for (var i = 1; i <= totalPDFPages; i++) {
			pdf.addPage(PDF_Width, PDF_Height);
			pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + top_left_margin * 4, canvas_image_width, canvas_image_height);
		}

		pdf.save('myNotes.pdf');
	});
}
function undoRedoCanvas() {
	let url = undoRedoTracker[track];
	let img = new Image();
	img.src = url;

	img.onload = () => {
		tool.fillStyle = 'white';
		tool.fillRect(0, 0, canvas.width, canvas.height);
		tool.drawImage(img, 0, 0, canvas.width, canvas.height);
	};
}

function beginPath(strokeObj) {
	tool.beginPath();
	tool.moveTo(strokeObj.x, strokeObj.y);
}

function drawStroke(strokeObj) {
	tool.lineTo(strokeObj.x, strokeObj.y);
	tool.stroke();
}

function addToundoRedoTracker() {
	let url = canvas.toDataURL();
	undoRedoTracker.push(url);
	track = undoRedoTracker.length - 1;

	if (track > 0) {
		undo.classList.remove('disabled');
	}
}
function changeSliderValue(slider, target) {
	slider.addEventListener('input', () => {
		var newValue = slider.value;
		tool.lineWidth = newValue;
		target.style.display = 'block';
		target.innerHTML = newValue;
	});
	slider.addEventListener('mouseup', () => {
		target.style.display = 'none';
	});
}
function changePencilColor() {
	pencil.setAttribute('src', `icons/${colorNumber}_pencil.svg`);
	pencilSlider.setAttribute('style', `background-color: ${colors[colorNumber]}; border: 2px solid ${colors[colorNumber]}`);
	pencilTarget.style.color = colors[colorNumber];
	tool.strokeStyle = colors[colorNumber];
	currColor = colors[colorNumber];
	colorNumber = (colorNumber + 1) % 3;
}
function createStickyNote(stickyTemplateHTML) {
	let stickyCont = document.createElement('div');
	stickyCont.setAttribute('class', 'sticky-note');
	stickyCont.setAttribute('id', `sticky-note-${stickyNoteNumber}`);

	let navDimensions = document.querySelector('nav').getBoundingClientRect();
	let left = Math.floor(Math.random() * window.innerWidth);
	let top = Math.floor(Math.random() * (window.innerHeight - navDimensions.height));

	stickyCont.innerHTML = stickyTemplateHTML;

	if (top < navDimensions.height) {
		top += navDimensions.height;
	}
	if (top > window.innerHeight / 2) {
		top -= 256;
	}
	stickyCont.style.top = top + window.pageYOffset + 'px';

	if (left > 240) {
		left -= 240;
	}
	stickyCont.style.left = left + 'px';
	document.querySelector('.canvas_div_pdf').appendChild(stickyCont);

	//for drap n drop
	document.querySelector(`#sticky-note-${stickyNoteNumber} header`).onmousedown = function (event) {
		dragAndDrop(stickyCont, event);
	};
	stickyCont.ondragstart = function () {
		return false;
	};

	//to minimize note textarea
	let minimize = document.querySelector(`#sticky-note-${stickyNoteNumber} .minimize`);
	let noteContainer = document.querySelector(`#sticky-note-${stickyNoteNumber} .note-container`);
	let noteHeader = document.querySelector(`#sticky-note-${stickyNoteNumber} header`);
	minimize.addEventListener('click', () => {
		let display = getComputedStyle(noteContainer).getPropertyValue('display');
		if (display === 'block') {
			noteContainer.style.display = 'none';
			noteHeader.style.borderRadius = '0.8rem';
		} else {
			noteHeader.style.borderBottomLeftRadius = '';
			noteHeader.style.borderBottomRightRadius = '';
			noteContainer.style.display = 'block';
		}
	});

	//to delete the sticky note
	let remove = document.querySelector(`#sticky-note-${stickyNoteNumber} .remove`);
	remove.addEventListener('click', () => {
		console.log('clicked');
		stickyCont.remove();
	});

	stickyNoteNumber++;
}
function dragAndDrop(element, event) {
	let shiftX = event.clientX - element.getBoundingClientRect().left;
	let shiftY = event.clientY - element.getBoundingClientRect().top;
	// (1) prepare to moving: make absolute and on top by z-index
	// element.style.position = 'absolute';
	element.style.zIndex = 1000;

	// centers the element at (pageX, pageY) coordinates
	function moveAt(pageX, pageY) {
		element.style.left = pageX - shiftX + 'px';
		element.style.top = pageY - shiftY + 'px';
	}
	moveAt(event.pageX, event.pageY);

	function onMouseMove(event) {
		moveAt(event.pageX, event.pageY);
	}
	document.addEventListener('mousemove', onMouseMove);
	element.onmouseup = function () {
		document.removeEventListener('mousemove', onMouseMove);
		element.onmouseup = null;
	};
}

function OpenBoard({ history, i18n, language }) {
	useEffect(() => {
		hamburger = document.querySelector('#nav-icon1');
		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('open');

			let tools = document.querySelector('.tools');
			if (toolsDisplay) {
				tools.setAttribute('style', 'animation-name:hide-tools;animation-duration: 0.8s');
				setTimeout(function () {
					tools.style.display = 'none';
				}, 700);
				toolsDisplay = false;
			} else {
				tools.setAttribute('style', 'animation-name:show-tools');
				tools.style.display = 'flex';
				toolsDisplay = true;
			}
		});
		pencilSlider = document.querySelector('#pencil-slider-value input');
		eraserSlider = document.querySelector('#eraser-slider-value input');
		pencil = document.querySelector('img#pencil');
		eraser = document.querySelector('img#eraser');
		pencilTarget = document.querySelector('#pencil-slider-value .value');
		eraserTarget = document.querySelector('#eraser-slider-value .value');
		sticky = document.querySelector('img#sticky');
		changeSliderValue(pencilSlider, pencilTarget);
		changeSliderValue(eraserSlider, eraserTarget);
		//to toggle active class
		pencil.addEventListener('click', () => {
			pencil.classList.add('active');
			eraser.classList.remove('active');
			pencilSlider.style.display = 'block';
			eraserSlider.style.display = 'none';

			tool.strokeStyle = currColor;
		});
		eraser.addEventListener('click', () => {
			eraser.classList.add('active');
			pencil.classList.remove('active');
			pencilSlider.style.display = 'none';
			eraserSlider.style.display = 'block';

			tool.strokeStyle = 'white';
		});
		pencilSlider.addEventListener('dblclick', changePencilColor);
		pencil.addEventListener('dblclick', changePencilColor);
		sticky.addEventListener('click', () => {
			let stickyTemplateHTML = `
            <header>
              <input type="text" />
              <div class="actions">
                <div class="minimize"></div>
                <div class="remove"></div>
              </div>
            </header>
            <div class="note-container">
              <textarea spellcheck="false" ></textarea>
            </div>
            `;

			createStickyNote(stickyTemplateHTML);
		});
		upload = document.querySelector('img#upload');
		upload.addEventListener('click', () => {
			let input = document.createElement('input');
			input.setAttribute('type', 'file');
			input.setAttribute('accept', 'image/*');
			input.click();

			input.addEventListener('change', () => {
				let file = input.files[0];
				let url = URL.createObjectURL(file);
				let stickyTemplateHTML = `
    <header>
    <input type="text" value=${file.name.split('.')[0]} />
    <div class="actions">
      <div class="minimize"></div>
      <div class="remove"></div>
    </div>
    </header>
    <div class="note-container">
      <img src = "${url}" />
    </div>
    `;
				createStickyNote(stickyTemplateHTML);
			});
		});
		canvas = document.querySelector('canvas');
		undoRedoTracker = [];
		track = 0;
		addToundoRedoTracker();
		undo = document.querySelector('img#undo');
		redo = document.querySelector('img#redo');

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight * 4;

		tool = canvas.getContext('2d');

		tool.strokeStyle = 'black';
		tool.lineWidth = '3';
		mouseDown = false;

		canvas.addEventListener('mousedown', (e) => {
			mouseDown = true;
			beginPath({ x: e.pageX, y: e.pageY });
		});

		canvas.addEventListener('mousemove', (e) => {
			if (mouseDown) drawStroke({ x: e.pageX, y: e.pageY });
		});

		canvas.addEventListener('mouseup', () => {
			mouseDown = false;

			addToundoRedoTracker();
		});
		undo.addEventListener('click', () => {
			if (track > 0) {
				track--;
				undoRedoCanvas();
			}

			updateUndoRedoDisabledClass();
		});

		redo.addEventListener('click', () => {
			if (track < undoRedoTracker.length - 1) {
				track++;
				undoRedoCanvas();
			}

			updateUndoRedoDisabledClass();
		});
		download = document.querySelector('img#download');
		download.addEventListener('click', () => {
			let noteContainers = document.querySelectorAll('.note-container');
			noteContainers.forEach((note) => {
				note.style.border = '1px solid #bbbbbb';
			});

			getPDF();

			noteContainers.forEach((note) => {
				note.style.border = 'none';
			});
		});
	}, []);
	return (
		<>
			<div className="tools-toggle-button">
				<div id="nav-icon1" className="open">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className="tools">
				<img id="pencil" className="active" src={pencil_0} />
				<img id="eraser" src={eraser_} />
				<img id="sticky" src={note} />
				<img id="upload" src={photo} />
				<img id="undo" src={undo_} className="disabled" />
				<img id="redo" src={redo_} className="disabled" />
				<img id="download" src={download_} />
			</div>
			<div id="pencil-slider-value">
				<div className="value">2</div>
				<input
					type="range"
					min="1"
					max="10"
					step="1"
					value="3"
					onChange={() => {
						console.log('hello');
					}}
				/>
			</div>
			<div id="eraser-slider-value">
				<div className="value">2</div>
				<input
					type="range"
					min="1"
					max="10"
					step="1"
					value="3"
					style={{ display: 'none' }}
					onChange={() => {
						console.log('hello');
					}}
				/>
			</div>
			<div className="canvas_div_pdf">
				<canvas></canvas>
			</div>
		</>
	);
}

// prettier-ignore
export default (withRouter(OpenBoard))

/*
███████╗████████╗██╗   ██╗██╗     ███████╗███████╗
██╔════╝╚══██╔══╝╚██╗ ██╔╝██║     ██╔════╝██╔════╝
███████╗   ██║    ╚████╔╝ ██║     █████╗  ███████╗
╚════██║   ██║     ╚██╔╝  ██║     ██╔══╝  ╚════██║
███████║   ██║      ██║   ███████╗███████╗███████║
╚══════╝   ╚═╝      ╚═╝   ╚══════╝╚══════╝╚══════╝
*/
