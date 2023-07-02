 var webSocketUrl = "ws:\/\/" + window.location.hostname + "/ws";
 var websocket;

 function initWebSocket() 
 {
	websocket = new WebSocket(webSocketUrl);
	websocket.onopen = function(event){};
	websocket.onclose = function(event){setTimeout(initWebSocket, 2000);};
	websocket.onmessage = function(event) 
	{
		PopulateWebpanel(event.data);
	};
		
 }
	
 function PopulateWebpanel(val)
 {
	var P2 = val.split("->");
		
	if(P2[0] == "BASIC"){
		var array = P2[1].split('|');
		
		try { document.getElementById("txtSTATUS").innerHTML = array[0]; } catch (error) { console.error(error); }
		  
		try { if(array[0] == 'Record Signal..') { document.getElementById('txtRecord').checked = true;  } else { document.getElementById('txtRecord').checked = false; } 	} catch (error) { console.error(error); }
		try { if(array[0] == 'Scanner Signal..') { document.getElementById('txtScanner').checked = true;  } else { document.getElementById('txtScanner').checked = false; } 	} catch (error) { console.error(error); }
		try { if(array[0] == 'Bruteforce Protocol..') { document.getElementById('txtBruteforcer').checked = true;  } else { document.getElementById('txtBruteforcer').checked = false; } 	} catch (error) { console.error(error); }
		try { if(array[0] == 'Jammer Signal..') { document.getElementById('txtJammer').checked = true;  } else { document.getElementById('txtJammer').checked = false; } 	} catch (error) { console.error(error); }
		try { if(array[0] == 'Rolljam Attack..') { document.getElementById('txtRolljam').checked = true;  } else { document.getElementById('txtRolljam').checked = false; } 	} catch (error) { console.error(error); }
		try { if(array[0] == 'Rollback Attack..') { document.getElementById('txtRollback').checked = true;  } else { document.getElementById('txtRollback').checked = false; } 	} catch (error) { console.error(error); }

		try { document.getElementById("txtMODU").innerHTML = array[1]; } catch (error) { console.error(error); }
		try { document.getElementById("txtUPTIME").innerHTML = array[2]; } catch (error) { console.error(error); }
		try { document.getElementById("txtBTN1").value = array[3]; } catch (error) { console.error(error); }
		try { document.getElementById("txtBTN2").value = array[4]; } catch (error) { console.error(error); }
		try { document.getElementById("txtRXRAD").value = array[5]; } catch (error) { console.error(error); } 
		try { document.getElementById("txtTXRAD").value = array[6]; } catch (error) { console.error(error); }
		try { document.getElementById("txtFRQ").value = array[7];  } catch (error) { console.error(error); }
		try { document.getElementById("txtFREQ").innerHTML = array[7] + " mHz"; } catch (error) { console.error(error); }
		try { document.getElementById("txtMOD").value = array[8]; } catch (error) { console.error(error); }
		try { document.getElementById("txtBAW").value = array[9];  } catch (error) { console.error(error); }
		try { document.getElementById("txtBAND").innerHTML = array[9] + ' kHz'; } catch (error) { console.error(error); }
		try { document.getElementById("txtDEV").value = array[10]; } catch (error) { console.error(error); }
		try { document.getElementById("txtBPS").value = array[11];  } catch (error) { console.error(error); }
		try { document.getElementById("txtDRATE").innerHTML = array[11] + ' kBaud'; } catch (error) { console.error(error); }
		try { document.getElementById("txtPKT").value = array[12]; } catch (error) { console.error(error); }
		try { document.getElementById('btnPreset' + array[13]).checked = true; } catch (error) { console.error(error); }
		try { document.getElementById("txtPROTOCOL").value = array[14]; } catch (error) { console.error(error); }
		try { document.getElementById("txtDEC").value = array[15]; } catch (error) { console.error(error); }
		try { document.getElementById("txtREPEAT1").value = array[16]; } catch (error) { console.error(error); }
		try { document.getElementById("txtREPEAT2").value = array[16]; } catch (error) { console.error(error); }
		try { document.getElementById("txtREPEAT3").value = array[16]; } catch (error) { console.error(error); }
		try { document.getElementById("RSSI").innerHTML = array[17]; } catch (error) { console.error(error); }
		try { document.getElementById("txtRSSI").value = array[17]; } catch (error) { console.error(error); }
		try { document.getElementById("txtSSID").value = array[18]; } catch (error) { console.error(error); }
		try { document.getElementById("txtPASS").value = array[19]; } catch (error) { console.error(error); }
		  
		try { if (array[20] == '1'){ document.getElementById('txtAPMODE').checked = true; } else { document.getElementById('txtAPMODE').checked = false; } } catch (error) { console.error(error); }
		try { if (array[21] == '1'){ document.getElementById('txtLogin').checked = true; } else { document.getElementById('txtLogin').checked = false; } } catch (error) { console.error(error); }
          
		try { document.getElementById("txtAPI").value = array[22]; } catch (error) { console.error(error); }
		try { document.getElementById('rollPreset' + array[23]).checked = true; } catch (error) { console.error(error); }
		try { document.getElementById("txtFRAME").value = array[24]; } catch (error) { console.error(error); }
		try { document.getElementById("txtREQUIRED").value = array[25]; } catch (error) { console.error(error); }
		try { document.getElementById("txtIP").value = array[26]; } catch (error) { console.error(error); }
		try { document.getElementById("txtJAMMODE").value = array[27]; } catch (error) { console.error(error); }
		
		try { if (array[27] == 1) {
			document.getElementById("txtJAMFRQ2").hidden = true;
			document.getElementById("lblJAMFRQ2").hidden = true;
			document.getElementById("txtJAMPWR2").hidden = true;
			document.getElementById("lblJAMPWR2").hidden = true; 
		} else {
			document.getElementById("txtJAMFRQ2").hidden = false;
			document.getElementById("lblJAMFRQ2").hidden = false;
			document.getElementById("txtJAMPWR2").hidden = false;
			document.getElementById("lblJAMPWR2").hidden = false; 
		} } catch (error) { console.error(error); }
		
		try { document.getElementById("txtJAMPWR1").value = array[28]; } catch (error) { console.error(error); }
		try { document.getElementById("txtJAMFRQ1").value = array[29]; } catch (error) { console.error(error); }
		try { document.getElementById("txtJAMPWR2").value = array[30]; } catch (error) { console.error(error); }
		try { document.getElementById("txtJAMFRQ2").value = array[31]; } catch (error) { console.error(error); }
		try { document.getElementById("txtFOLDER").value = array[32]; } catch (error) { console.error(error); }
		try { document.getElementById("txtRAM").innerHTML = array[33]; } catch (error) { console.error(error); }
		try { document.getElementById("txtVERSION").innerHTML = array[34]; } catch (error) { console.error(error); }
		try { document.getElementById("txtREADCOUNT").innerHTML = array[35]; } catch (error) { console.error(error); }
		
		try { if (array[36] == 'true'){ 
		document.getElementById('txtERolljam').checked = true; 
		document.getElementById("txtJAMFRQ1").hidden = false;
		document.getElementById("lblJAMFRQ1").hidden = false;
		document.getElementById("txtJAMPWR1").hidden = false;
		document.getElementById("lblJAMPWR1").hidden = false;
		document.getElementById("txtJAMMODE").hidden = false;
		document.getElementById("lblJAMMODE").hidden = false;
		} else { 
		document.getElementById('txtERolljam').checked = false; 
		document.getElementById("txtJAMFRQ1").hidden = true;
		document.getElementById("lblJAMFRQ1").hidden = true;
		document.getElementById("txtJAMPWR1").hidden = true;
		document.getElementById("lblJAMPWR1").hidden = true;
		document.getElementById("txtJAMMODE").hidden = true;
		document.getElementById("lblJAMMODE").hidden = true;
		} } catch (error) { console.error(error); }
		try { if (array[37] == 'true'){
		document.getElementById('txtERollback').checked = true;
		document.getElementById("txtJAMFRQ1").hidden = false;
		document.getElementById("lblJAMFRQ1").hidden = false;
		document.getElementById("txtJAMPWR1").hidden = false;
		document.getElementById("lblJAMPWR1").hidden = false;
		document.getElementById("txtJAMMODE").hidden = false;
		document.getElementById("lblJAMMODE").hidden = false;
		} else { 
		document.getElementById('txtERollback').checked = false; 
		document.getElementById("txtJAMFRQ1").hidden = true;
		document.getElementById("lblJAMFRQ1").hidden = true;
		document.getElementById("txtJAMPWR1").hidden = true;
		document.getElementById("lblJAMPWR1").hidden = true;
		document.getElementById("txtJAMMODE").hidden = true;
		document.getElementById("lblJAMMODE").hidden = true;
		} } catch (error) { console.error(error); }
		
		
		try { document.getElementById("MINRSSI").innerHTML = array[38]; } catch (error) { console.error(error); }
		try { document.getElementById("txtMINRSSI").value = array[38]; } catch (error) { console.error(error); }
		
	} else if(P2[0] == "FOLDER"){
		try { 
			var array = P2[1].split('|');
			var arrayLength = array.length;
			$("#txtFOLDER").empty();
			select = document.getElementById('txtFOLDER');
			var opt = document.createElement('option');
			opt.value = '/';
			opt.innerHTML = '/';
			select.appendChild(opt);
			
			for (var i = 0; i < arrayLength; i++) {
				var opt = document.createElement('option');
				opt.value = array[i];
				opt.innerHTML = array[i];
				select.appendChild(opt);
			}
			
		} catch (error) { console.error(error); }
	} else if(P2[0] == "SD"){
		try {
			$("#saveBody").empty();
				
			var array = P2[1].split('|');
			var arrayLength = array.length;
	
			for (var i = 0; i < arrayLength; i++) {
				const tbl = document.getElementById("saveTable");
				const tblBody = document.getElementById("saveBody");
				const row = document.createElement("tr");
				const cell1 = document.createElement("td");
				const cell1Text = document.createTextNode(i+1);
	
				const cell2 = document.createElement("td");
				const cell2Text = document.createTextNode(array[i]);
	
				const cell3 = document.createElement("td");
				cell3.innerHTML = `<img type="button" onclick="fetch('/APPLY?P1=CURRENT&P2=` + array[i] + `'); fetch('/TXSD');" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA2NEMwIDQ2LjMgMTQuMyAzMiAzMiAzMmMyMjkuOCAwIDQxNiAxODYuMiA0MTYgNDE2YzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMyQzM4NCAyNTMuNiAyMjYuNCA5NiAzMiA5NkMxNC4zIDk2IDAgODEuNyAwIDY0ek0wIDQxNmE2NCA2NCAwIDEgMSAxMjggMEE2NCA2NCAwIDEgMSAwIDQxNnpNMzIgMTYwYzE1OS4xIDAgMjg4IDEyOC45IDI4OCAyODhjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJjMC0xMjMuNy0xMDAuMy0yMjQtMjI0LTIyNGMtMTcuNyAwLTMyLTE0LjMtMzItMzJzMTQuMy0zMiAzMi0zMnoiLz48L3N2Zz4=" class="fa menu-filter-green me-2">`;

				const cell4 = document.createElement("td");
				cell4.innerHTML = `<a href="/DLSD?P1=` + array[i] + `"><img type="button" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjg4IDMyYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMyVjI3NC43bC03My40LTczLjRjLTEyLjUtMTIuNS0zMi44LTEyLjUtNDUuMyAwcy0xMi41IDMyLjggMCA0NS4zbDEyOCAxMjhjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBsMTI4LTEyOGMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM3MtMzIuOC0xMi41LTQ1LjMgMEwyODggMjc0LjdWMzJ6TTY0IDM1MmMtMzUuMyAwLTY0IDI4LjctNjQgNjR2MzJjMCAzNS4zIDI4LjcgNjQgNjQgNjRINDQ4YzM1LjMgMCA2NC0yOC43IDY0LTY0VjQxNmMwLTM1LjMtMjguNy02NC02NC02NEgzNDYuNWwtNDUuMyA0NS4zYy0yNSAyNS02NS41IDI1LTkwLjUgMEwxNjUuNSAzNTJINjR6bTM2OCA1NmEyNCAyNCAwIDEgMSAwIDQ4IDI0IDI0IDAgMSAxIDAtNDh6Ii8+PC9zdmc+" class="fa menu-filter-orange me-2"></a>`;

				const cell5 = document.createElement("td");
				cell5.innerHTML = `<img type="button" onclick="fetch('/APPLY?P1=CURRENT&P2=` + array[i] + `'); fetch('/DELSD');" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTM1LjIgMTcuN0wxMjggMzJIMzJDMTQuMyAzMiAwIDQ2LjMgMCA2NFMxNC4zIDk2IDMyIDk2SDQxNmMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkgzMjBsLTcuMi0xNC4zQzMwNy40IDYuOCAyOTYuMyAwIDI4NC4yIDBIMTYzLjhjLTEyLjEgMC0yMy4yIDYuOC0yOC42IDE3Ljd6TTQxNiAxMjhIMzJMNTMuMiA0NjdjMS42IDI1LjMgMjIuNiA0NSA0Ny45IDQ1SDM0Ni45YzI1LjMgMCA0Ni4zLTE5LjcgNDcuOS00NUw0MTYgMTI4eiIvPjwvc3ZnPg==" class="fa menu-filter-red me-2">`;
					
				const cell6 = document.createElement("td");
				cell6.innerHTML = `<img type="button" onclick="fetch('/APPLY?P1=CURRENT&P2=` + array[i] + `'); fetch('/SETFILE');" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDY0Qzg2IDY0IDAgMTUwIDAgMjU2Uzg2IDQ0OCAxOTIgNDQ4SDM4NGMxMDYgMCAxOTItODYgMTkyLTE5MnMtODYtMTkyLTE5Mi0xOTJIMTkyem0xOTIgOTZhOTYgOTYgMCAxIDEgMCAxOTIgOTYgOTYgMCAxIDEgMC0xOTJ6Ii8+PC9zdmc+" class="fa menu-filter-grey me-2">`;

				cell1.appendChild(cell1Text);
				row.appendChild(cell1);

				cell2.appendChild(cell2Text);
				row.appendChild(cell2);
	
				row.appendChild(cell3);
				row.appendChild(cell4);
				row.appendChild(cell5);
				row.appendChild(cell6);

				tblBody.appendChild(row);
			}
		} catch (error) { console.error(error); }
	} else if(P2[0] == "ROLLING"){
			var array = P2[1].split('|');
			var arrayLength = array.length;
	
			for (var i = 0; i < arrayLength; i++) {
				var parsed = array[i].split("*");
		try {
			const testBody = document.getElementById("accordionRolling");
			
			const test1 = document.createElement("div");
			test1.setAttribute('class', 'accordion-item bg-transparent');
			
			const test2 = document.createElement("h2");
			test2.setAttribute('class', 'accordion-header');
			test2.id = "heading" + parsed[0];
			
			const test3 = document.createElement("button");
			test3.setAttribute('class', 'accordion-button collapsed');
			test3.setAttribute('type', 'button');
			test3.setAttribute('data-bs-toggle', 'collapse');
			test3.setAttribute('data-bs-target', '#collapse' + parsed[0]);
			test3.setAttribute('aria-expanded', 'false');
			test3.setAttribute('aria-controls', 'collapse' + parsed[0]);
			test3.setAttribute('aria-expanded', 'false');
			
			test3.innerHTML = "<font color=#FFC406>Rolling Code: #" + parsed[0] + "</font> - Type: " + parsed[5] + " - Brand: " + parsed[6] + " - Model: " + parsed[7] + " - Status: <font color=green>" + parsed[4] + "</font>";
			
			test3.id = "buttonName" + parsed[0];
			
			const test4 = document.createElement("div");
			test4.setAttribute('id', 'collapse' + parsed[0]);
			test4.setAttribute('class', 'accordion-collapse');
			test4.setAttribute('class', 'collapse');
			test4.setAttribute('aria-labelledby', 'heading' + + parsed[0]);
			test4.setAttribute('data-bs-parent', '#accordionRolling');
			test4.setAttribute('style', '');
			
			const test5 = document.createElement("div");
			test5.setAttribute('class', 'accordion-body');
			
			const test6 = document.createElement("a");
			test6.innerHTML = "<font color='red'>Statut:</font> <font color=green>" + parsed[4] + "</font><br><br>";
			test6.id = "statusName" + parsed[0];
			
			const test7 = document.createElement("a");
			test7.innerHTML = "<font color='red'>HEX:</font> " + parsed[1] + "<br><br>";
			
			const test8 = document.createElement("a");
			test8.innerHTML = "<font color='red'>Button:</font> " + parsed[2] + "<br><br>";
			
			const test9 = document.createElement("a");
			test9.innerHTML = "<font color='red'>Sync:</font> " + parsed[3] + "<br><br>";
			
			const send1 = document.createElement("td");
			send1.innerHTML = `<img type="button" onclick="setUsed(` + parsed[0] + `,'` + parsed[5] + `', '` + parsed[6] + `', '` + parsed[7] + `'); fetch('/APPLY?P1=ROLLSYNC&P2=` + parsed[3] + `'); fetch('/APPLY?P1=FOLDER&P2=Kaiju'); fetch('/TXROLL');" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZhMjU2IDI1NiAwIDEgMSA1MTIgMEEyNTYgMjU2IDAgMSAxIDAgMjU2ek0xODguMyAxNDcuMWMtNy42IDQuMi0xMi4zIDEyLjMtMTIuMyAyMC45VjM0NGMwIDguNyA0LjcgMTYuNyAxMi4zIDIwLjlzMTYuOCA0LjEgMjQuMy0uNWwxNDQtODhjNy4xLTQuNCAxMS41LTEyLjEgMTEuNS0yMC41cy00LjQtMTYuMS0xMS41LTIwLjVsLTE0NC04OGMtNy40LTQuNS0xNi43LTQuNy0yNC4zLS41eiIvPjwvc3ZnPg==" class="fa result-filter-orange me-2">`;

			const save1 = document.createElement("td");
			save1.innerHTML = `<img type="button" onclick="saveRolling(` + parsed[3] + `, ` + parsed[2] + `);" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggOTZWNDE2YzAgOC44IDcuMiAxNiAxNiAxNkgzODRjOC44IDAgMTYtNy4yIDE2LTE2VjE3MC41YzAtNC4yLTEuNy04LjMtNC43LTExLjNsMzMuOS0zMy45YzEyIDEyIDE4LjcgMjguMyAxOC43IDQ1LjNWNDE2YzAgMzUuMy0yOC43IDY0LTY0IDY0SDY0Yy0zNS4zIDAtNjQtMjguNy02NC02NFY5NkMwIDYwLjcgMjguNyAzMiA2NCAzMkgzMDkuNWMxNyAwIDMzLjMgNi43IDQ1LjMgMTguN2w3NC41IDc0LjUtMzMuOSAzMy45TDMyMC44IDg0LjdjLS4zLS4zLS41LS41LS44LS44VjE4NGMwIDEzLjMtMTAuNyAyNC0yNCAyNEgxMDRjLTEzLjMgMC0yNC0xMC43LTI0LTI0VjgwSDY0Yy04LjggMC0xNiA3LjItMTYgMTZ6bTgwLTE2djgwSDI3MlY4MEgxMjh6bTMyIDI0MGE2NCA2NCAwIDEgMSAxMjggMCA2NCA2NCAwIDEgMSAtMTI4IDB6Ii8+PC9zdmc+" class="fa result-filter-green me-2"><br><br>`;

			test1.appendChild(test2);
			test2.appendChild(test3);

			testBody.appendChild(test1);
			
			test4.appendChild(test5);
			test5.appendChild(test6);
			test5.appendChild(test7);
			test5.appendChild(test8);
			test5.appendChild(test9);
			test5.appendChild(send1);
			test5.appendChild(save1);
			
			testBody.appendChild(test4);
			
		} catch (error) { console.error(error); }

			}
	} else if(P2[0] == "SIGNAL"){
			var parsed = P2[1].split("|");
		try {
			const testBody = document.getElementById("accordionSignal");
			
			const test1 = document.createElement("div");
			test1.setAttribute('class', 'accordion-item bg-transparent');
			
			const test2 = document.createElement("h2");
			test2.setAttribute('class', 'accordion-header');
			test2.id = "heading" + parsed[0];
			
			const test3 = document.createElement("button");
			test3.setAttribute('class', 'accordion-button collapsed');
			test3.setAttribute('type', 'button');
			test3.setAttribute('data-bs-toggle', 'collapse');
			test3.setAttribute('data-bs-target', '#collapse' + parsed[0]);
			test3.setAttribute('aria-expanded', 'false');
			test3.setAttribute('aria-controls', 'collapse' + parsed[0]);
			test3.setAttribute('aria-expanded', 'false');
			test3.innerHTML = "<font color=#FFC406>ID: " + parsed[0] + "# </font>Frequency: " + parsed[1] + " - Preset: " + parsed[2] + " - RSSI: <font color='" + parsed[9] + "'>" + parsed[3] + "</font>";
			
			const test4 = document.createElement("div");
			test4.setAttribute('id', 'collapse' + parsed[0]);
			test4.setAttribute('class', 'accordion-collapse');
			test4.setAttribute('class', 'collapse');
			test4.setAttribute('aria-labelledby', 'heading' + + parsed[0]);
			test4.setAttribute('data-bs-parent', '#accordionSignal');
			test4.setAttribute('style', '');
			
			const test5 = document.createElement("div");
			test5.setAttribute('class', 'accordion-body');
			test5.innerHTML = "<font color='red'>RAW Data:</font>";
			
			var textareaRAW = document.createElement('textarea');
			textareaRAW.type = "text";
			textareaRAW.value = parsed[4];
			textareaRAW.setAttribute('class', 'form-control');
			textareaRAW.setAttribute('style', 'height: 180px;');
			textareaRAW.id = "txtRAWData" + parsed[0];
			
			const test6 = document.createElement("a");
			test6.innerHTML = "<font color='red'>Sample:</font> " + parsed[5];
			
			const test7 = document.createElement("a");
			test7.innerHTML = "<br><br><font color='red'>Binary:</font>";
			
			var textareaBIN = document.createElement('textarea');
			textareaBIN.type = "text";
			textareaBIN.value = parsed[6];
			textareaBIN.setAttribute('class', 'form-control');
			textareaBIN.setAttribute('style', 'height: 180px;');
			textareaBIN.id = "txtBINData" + parsed[0];
			
			const test8 = document.createElement("a");
			test8.innerHTML = "<font color='red'>Symbol:</font> " + parsed[7] + "<br><br>";
			
			const send1 = document.createElement("td");
			send1.innerHTML = `<img type="button" onclick="PopulateWebpanel('NEWTEST->1|'); fetch('/SENDRAW?P1=` + parsed[4] + `');" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZhMjU2IDI1NiAwIDEgMSA1MTIgMEEyNTYgMjU2IDAgMSAxIDAgMjU2ek0xODguMyAxNDcuMWMtNy42IDQuMi0xMi4zIDEyLjMtMTIuMyAyMC45VjM0NGMwIDguNyA0LjcgMTYuNyAxMi4zIDIwLjlzMTYuOCA0LjEgMjQuMy0uNWwxNDQtODhjNy4xLTQuNCAxMS41LTEyLjEgMTEuNS0yMC41cy00LjQtMTYuMS0xMS41LTIwLjVsLTE0NC04OGMtNy40LTQuNS0xNi43LTQuNy0yNC4zLS41eiIvPjwvc3ZnPg==" class="fa result-filter-orange me-2">`;

			const analyze1 = document.createElement("td");
			analyze1.innerHTML = `<a href="/ANALYZE?P1=` + parsed[6].trim() + `" target="_blank"><img type="button" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMTkyLjAwMDAwMHB0IiBoZWlnaHQ9IjE5Mi4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDE5Mi4wMDAwMDAgMTkyLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgoKPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMTkyLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIKZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIj4KPHBhdGggZD0iTTQ5NiAxODgzIGMtMzggLTMwIC00NCAtMzggLTMyIC00NSA5IC01IDMxIC01IDUzIDEgMjAgNiAzOSA5IDQxIDYKMiAtMiAtMTYgLTI2IC00MSAtNTIgLTQ0IC00NyAtNjcgLTg4IC02NyAtMTE5IDAgLTIwIDEyIC0xOCA1MyAxMCBsMzUgMjQgLTUKLTM3IGMtNCAtMjcgMCAtNDIgMTIgLTU0IDI1IC0yNSAzNSAtMjEgMzUgMTYgMCAyNCA5IDQyIDMzIDY1IDQxIDQwIDYwIDQyIDUxCjYgLTQgLTE2IC0yIC0yOSA2IC0zNCA3IC00IDE1IC00NyAyMSAtMTA2IDQgLTU1IDE1IC0xMjYgMjQgLTE1OSAxNSAtNjEgMjEKLTIwNiA4IC0yMTggLTMgLTQgLTM0IDIwIC02OSA1MyAtNzggNzUgLTE0OSAxMTAgLTIyNCAxMTAgLTExOCAwIC0xNzUgLTY5Ci0xODMgLTIxOSBsLTQgLTgzIDM5IDQxIGMyMiAyMiA0NCA0MSA0OSA0MSAxNiAwIDM4IC02MiA1MyAtMTUwIDggLTQ1IDE2IC04NAoxOSAtODYgMyAtMyAxMyAxOSAyMiA0OCAyOSA4OSA2NyAxNjggODEgMTY4IDcgMCAzMiAtMzkgNTUgLTg3IGw0MSAtODcgMjAgMzkKYzExIDIyIDI4IDQ4IDM2IDU4IDE2IDE3IDE4IDE1IDM4IC00NSAxOSAtNTkgMjMgLTYzIDQ4IC02MCAxNiAyIDM2IC00IDQ3Ci0xNCAzOSAtMzUgOTYgLTE1OCA4NyAtMTg2IC0zIC03IC0yNSAyMCAtNTEgNjAgLTYwIDkyIC03OCAxMDEgLTE2MiA3OSAtMzUKLTkgLTg3IC0xNyAtMTE3IC0xNyAtNjggMCAtMTAyIC0xNyAtMTA2IC01MyAtMyAtMjIgMiAtMjkgMjQgLTM3IDMyIC0xMyA0NwotOSAxNDYgMzYgNjkgMzIgODEgMzUgMTExIDI1IDQxIC0xNCA2OCAtNDEgMTAxIC0xMDMgbDI0IC00NiAtMjEgLTIwIGMtMzAKLTI3IC02MiAtMzUgLTg3IC0yMiAtMTUgOCAtMjUgOCAtMzQgMSAtMTAgLTkgLTIyIC0yIC01MCAyOSAtMjIgMjUgLTM4IDM2Ci00MCAyOCAtMyAtNyAtMTAgLTMwIC0xNiAtNTAgLTEyIC0zOSAtMzEgLTYwIC0zNyAtNDEgLTIgNiAtMTggMzIgLTM1IDU5IC0yNwo0MyAtMzIgNDcgLTM5IDI5IC00IC0xMSAtOCAtMzEgLTggLTQ1IC0xIC0xNCAtNiAtMzIgLTExIC00MCAtOSAtMTMgLTE0IC0xMAotMzMgMTUgLTEyIDE2IC0zNSA0NSAtNTIgNjQgbC0yOSAzMyAtNyAtMjUgYy0xNSAtNTYgMjggLTE2MiA4OCAtMjE5IDM5IC0zNwo3MyAtNDggMTU0IC00OCBsNjkgMCAwIC00OSBjMCAtNjggMjggLTEwMSA5MyAtMTA4IGw0NyAtNiAtNiAtNDYgYy01IC0zOSAtMgotNTEgMjAgLTgwIDE0IC0xOSAyNiAtMzkgMjYgLTQzIDAgLTEzIC0xMDEgLTkgLTE1OSA3IC00NSAxMiAtNTkgMTIgLTg1IDEKLTMwIC0xMyAtNjUgLTYwIC01MyAtNzIgMyAtMyA4OSAtMyAxOTEgMSAyMDggOSAyMTQgMTEgMTUxIDcxIC0yOCAyNyAtMzUgNDAKLTM1IDcyIDAgODYgNyA5NyA2OCAxMTcgMzIgOSA4MyAzMCAxMTQgNDYgbDU4IDI5IDE3IC0yNyBjMTUgLTIzIDE4IC01MCAxOAotMTc4IGwwIC0xNTAgMTQ4IC0xIGMxNTUgLTEgMTYxIDEgMTMxIDQ0IC0yNSAzNiAtNzIgNTQgLTE0MCA1NCAtNjIgMCAtNjMgMAotNzAgMzEgLTQgMTggLTggNzcgLTggMTMyIC0xIDc4IC01IDEwNiAtMTkgMTI2IC0xNyAyNSAtMTYgMjYgMyA0NCAxNSAxNCAzOAoxOCAxMDkgMTkgODMgMSA5MiAzIDEyNyAzMSA0NyAzOCA3NCA4OSA3NCAxMzggMCA0NCAtOSA2MiAtNjEgMTMyIC02NCA4NSAtNjAKMTMwIDE0IDE3NSA0NCAyNyA2MyAyNSA3NSAtOSAyMiAtNjMgMTExIC03NiAxNTIgLTI0IDI5IDM3IDI2IDc5IC05IDExNCAtNDIKNDEgLTgzIDM5IC0xMjggLTYgLTIxIC0yMSAtNDkgLTM3IC03MSAtNDEgLTQ4IC05IC04MSAtMjYgLTExMiAtNTkgLTM4IC00MQotMzUgLTEyMSA4IC0xOTYgMzkgLTY4IDQwIC0xMDEgNyAtMTM1IC0yMSAtMjEgLTMzIC0yNSAtNzMgLTIyIGwtNDcgMyAtNyA1NwpjLTcgNTcgLTI3IDEwOCAtNTUgMTQwIC0xMyAxNCAtMTIgMjMgMSA2OCA5IDI5IDI3IDgxIDQxIDExNiAxNCAzNCAzMiA5MCA0MAoxMjMgMjYgMTAwIDg1IDQ3MiA4NSA1MzQgMCA5OSAtMzYgMTQzIC0xNDkgMTgyIC00MCAxMyAtMTAwIDQyIC0xMzMgNjUgLTMzCjIyIC02NCA0MCAtNjggNDAgLTUgMCAtMTIgMTAgLTE2IDIyIC02IDIxIC03IDIxIC0yMCAzIC0yNiAtMzUgLTE3IC04MCAyMQotMTE0IDIwIC0xNyA0MCAtMzEgNDUgLTMxIDYgMCAxMCAtNCAxMCAtMTAgMCAtNSAtNyAtMTAgLTE1IC0xMCAtOCAwIC0zMCAtMTYKLTUwIC0zNSAtMzIgLTMzIC0zNSAtNDEgLTM1IC05MyAwIC01NSAxOSAtMTAyIDQxIC0xMDIgNSAwIDkgMTkgOSA0MyAwIDIzIDkKNjAgMjAgODIgbDIwIDQwIC01IC01NSBjLTYgLTY0IDggLTEyOSAyMCAtOTUgMjIgNjIgMjggNzUgNDEgODYgMTEgOSAxMSA1IC0xCi0yNCAtOCAtMjAgLTE1IC00NiAtMTUgLTU5IDAgLTIxIDAgLTIxIDI4IDUgMzAgMjkgNDQgMzUgMzcgMTQgLTMgLTYgNSAtMTcKMTcgLTIyIDEzIC02IDMyIC0yOCA0MyAtNTAgMTcgLTM1IDIwIC02MCAyMCAtMTk1IDAgLTE0NiAtMiAtMTYyIC0zNCAtMjczCi0zMSAtMTExIC02NiAtMTc3IC05MiAtMTc3IC0xMyAwIC02OSA0MiAtNjkgNTEgMCA1IDExIDI0IDI0IDQ0IDMzIDQ5IDQyIDExMQoyMyAxNTggLTI1IDU4IC04MiA2MiAtMTYxIDEwIC0zMiAtMjEgLTQzIC0yMyAtNjIgLTE0IC0yNCAxMCAtMjQgMTIgLTI0IDE2NQowIDEwOCA2IDE4OSAyMCAyNzEgMjUgMTQ0IDI1IDIwMCAyIDI0NSAtMTcgMzYgLTIzIDQwIC0xNTIgMTE2IC05NCA1NSAtMTIyCjU2IC0xODQgN3ogbTUwNCAtODE4IGMwIC0xNSAtNyAtNDAgLTE2IC01NyAtMTUgLTI4IC0xOCAtMzAgLTU3IC0yNCAtNjQgMTEKLTY4IDIyIC0yMCA2NyA1MSA0NyA5MyA1NCA5MyAxNHoiLz4KPC9nPgo8L3N2Zz4K" class="fa result-filter-red me-2"></a>`;
		
			const save1 = document.createElement("td");
			save1.innerHTML = `<img type="button" onclick="checkSaved('` + parsed[8] + `','` + parsed[4] + `');" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggOTZWNDE2YzAgOC44IDcuMiAxNiAxNiAxNkgzODRjOC44IDAgMTYtNy4yIDE2LTE2VjE3MC41YzAtNC4yLTEuNy04LjMtNC43LTExLjNsMzMuOS0zMy45YzEyIDEyIDE4LjcgMjguMyAxOC43IDQ1LjNWNDE2YzAgMzUuMy0yOC43IDY0LTY0IDY0SDY0Yy0zNS4zIDAtNjQtMjguNy02NC02NFY5NkMwIDYwLjcgMjguNyAzMiA2NCAzMkgzMDkuNWMxNyAwIDMzLjMgNi43IDQ1LjMgMTguN2w3NC41IDc0LjUtMzMuOSAzMy45TDMyMC44IDg0LjdjLS4zLS4zLS41LS41LS44LS44VjE4NGMwIDEzLjMtMTAuNyAyNC0yNCAyNEgxMDRjLTEzLjMgMC0yNC0xMC43LTI0LTI0VjgwSDY0Yy04LjggMC0xNiA3LjItMTYgMTZ6bTgwLTE2djgwSDI3MlY4MEgxMjh6bTMyIDI0MGE2NCA2NCAwIDEgMSAxMjggMCA2NCA2NCAwIDEgMSAtMTI4IDB6Ii8+PC9zdmc+" class="fa result-filter-green me-2"><br><br>`;

			test1.appendChild(test2);
			test2.appendChild(test3);

			testBody.appendChild(test1);

			test4.appendChild(test5);

			test5.appendChild(textareaRAW);
			test5.appendChild(test6);
			test5.appendChild(test7);
			test5.appendChild(textareaBIN);
			test5.appendChild(test8);
			test5.appendChild(send1);
			test5.appendChild(analyze1);
			test5.appendChild(save1);
			
			testBody.appendChild(test4);
		} catch (error) { console.error(error); }
	} else if(P2[0] == "KAIJU"){
		var parsed = P2[1].split("|");
		
		try {
			var parsed2 = parsed[0].split("*");
			if(parsed2[0] == 'true') {
				document.getElementById("txtRESULT0").style.color = "green";
				document.getElementById("txtRESULT0").innerHTML = parsed2[1];
			} else {
				document.getElementById("txtRESULT0").style.color = "red";
				document.getElementById("txtRESULT0").innerHTML = parsed2[1];
			}
		} catch (error) { console.error(error); }
		
		try { document.getElementById("txtRESULT1").innerHTML  = parsed[1];  } catch (error) { console.error(error); }
		try { document.getElementById("txtRESULT2").innerHTML  = parsed[2];  } catch (error) { console.error(error); }
		try { document.getElementById("txtRESULT3").innerHTML  = parsed[3];  } catch (error) { console.error(error); }
		try { document.getElementById("txtRESULT4").innerHTML  = parsed[4];  } catch (error) { console.error(error); }
		try { document.getElementById("txtRESULT5").innerHTML  = parsed[5];  } catch (error) { console.error(error); }
		try { document.getElementById("txtRESULT6").innerHTML  = parsed[6];  } catch (error) { console.error(error); }
		try { document.getElementById("txtRESULT7").innerHTML  = parsed[7];  } catch (error) { console.error(error); }
		try { document.getElementById("txtRESULT8").innerHTML  = parsed[8];  } catch (error) { console.error(error); }
		try { document.getElementById("txtRESULT9").innerHTML  = parsed[9];  } catch (error) { console.error(error); }
		try { document.getElementById("txtRESULT10").innerHTML = parsed[10]; } catch (error) { console.error(error); }
		try { document.getElementById("txtRESULT11").innerHTML = parsed[11]; } catch (error) { console.error(error); }
		try { document.getElementById("txtRESULT12").innerHTML = parsed[12]; } catch (error) { console.error(error); }
		try { document.getElementById("txtRESULT13").src = parsed[13]; } catch (error) { console.error(error); }
		try { document.getElementById("txtROLLBTN").value  	   = parsed[9]; } catch (error) { console.error(error); }

	} else if(P2[0] == "SCANNER"){
		var array = P2[1].split('|');
				
		try {
			const tbl = document.getElementById("scanTable");
				
			const tblBody = document.getElementById("scanBody");

			const row = document.createElement("tr");

			const cell1 = document.createElement("td");
			const cell1Text = document.createTextNode(array[0]);
	
			const cell2 = document.createElement("td");
			const cell2Text = document.createTextNode(array[1]);
	
			const cell3 = document.createElement("td");
			cell3.innerHTML = `<img type="button" id="txtSCANFREQ" onclick="fetch('/APPLY?P1=SETFREQ&P2=` + array[0] + `')" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMy4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzUyIDMyMGM4OC40IDAgMTYwLTcxLjYgMTYwLTE2MGMwLTE1LjMtMi4yLTMwLjEtNi4yLTQ0LjJjLTMuMS0xMC44LTE2LjQtMTMuMi0yNC4zLTUuM2wtNzYuOCA3Ni44Yy0zIDMtNy4xIDQuNy0xMS4zIDQuN0gzMzZjLTguOCAwLTE2LTcuMi0xNi0xNlYxMTguNmMwLTQuMiAxLjctOC4zIDQuNy0xMS4zbDc2LjgtNzYuOGM3LjktNy45IDUuNC0yMS4yLTUuMy0yNC4zQzM4Mi4xIDIuMiAzNjcuMyAwIDM1MiAwQzI2My42IDAgMTkyIDcxLjYgMTkyIDE2MGMwIDE5LjEgMy40IDM3LjUgOS41IDU0LjVMMTkuOSAzOTYuMUM3LjIgNDA4LjggMCA0MjYuMSAwIDQ0NC4xQzAgNDgxLjYgMzAuNCA1MTIgNjcuOSA1MTJjMTggMCAzNS4zLTcuMiA0OC0xOS45TDI5Ny41IDMxMC41YzE3IDYuMiAzNS40IDkuNSA1NC41IDkuNXpNODAgNDA4YTI0IDI0IDAgMSAxIDAgNDggMjQgMjQgMCAxIDEgMC00OHoiLz48L3N2Zz4=" class="fa menu-filter-orange me-2">`;

			cell1.appendChild(cell1Text);
			row.appendChild(cell1);

			cell2.appendChild(cell2Text);
			row.appendChild(cell2);
	
			row.appendChild(cell3);

			tblBody.appendChild(row);
		} catch (error) { console.error(error); }
	} else if(P2[0] == "ROLLBACK"){
		try { var array = P2[1].split('|'); document.getElementById('txtROLLBACK' + array[0]).value = array[1]; document.getElementById("txtFILENAME").value = array[2]; } catch (error) { console.error(error); }
	} else if(P2[0] == "ROLLJAM"){
		try { var array = P2[1].split('|'); document.getElementById('txtROLLJAM' + array[0]).value = array[1]; document.getElementById("txtFILENAME").value = array[2]; } catch (error) { console.error(error); }
	} else if(P2[0] == "SUCCESS"){
		try { showSuccessMessage(P2[1]); } catch (error) { console.error(error); }
	} else if(P2[0] == "ERROR"){
		try { showErrorMessage(P2[1]); } catch (error) { console.error(error); }
	} else if(P2[0] == "WARNING"){
		try { showWarningMessage(P2[1]); } catch (error) { console.error(error); }
	} else if(P2[0] == "INFO"){
		try { showInfoMessage(P2[1]); } catch (error) { console.error(error); }
	};
 }
	
	function getRandomID(min, max) {
		return Math.floor(Math.random() * (max - min + 1) ) + min;
	}
	
	function showSuccessMessage(val) {
		$.notify(val, 'success');
	}

	function showErrorMessage(val) {
		$.notify(val, 'error');
	}
	
	function showWarningMessage(val) {
		$.notify(val, 'warn');
	}
	
	function showInfoMessage(val) {
		$.notify(val, 'info');
	}
	
	function clearSignalInfo() {
		var tableHeaderRowCount = 1;

		var tbl = document.getElementById("infoTable");
		var tb2 = document.getElementById("rawTable");
		var tb3 = document.getElementById("binTable");
	
		const tb4 = document.getElementById("rawData");
		const tb5 = document.getElementById("binData");
		const tb6 = document.getElementById("txtFILENAME");
	
		for (var i = tableHeaderRowCount; i < tbl.rows.length; i++) {
			tbl.deleteRow(tableHeaderRowCount);
		}
	
		for (var i = tableHeaderRowCount; i < tb2.rows.length; i++) {
			tb2.deleteRow(tableHeaderRowCount);
		}
	
		for (var i = tableHeaderRowCount; i < tb3.rows.length; i++) {
			tb3.deleteRow(tableHeaderRowCount);
		}
	
		tb4.value = "";
		tb5.value = "";
		tb6.value = "";
	}
	
	function setUsed(_id, _type, _brand, _model) {
		try { document.getElementById('statusName' + _id).innerHTML  = '<font color=red>Statut: USED</font><br><br>';  } catch (error) { console.error(error); }
		try { document.getElementById('buttonName' + _id).innerHTML  = '<font color=#FFC406>Rolling Code: #' + _id + '</font> - Type: ' + _type + ' - Brand: ' + _brand + ' - Model: ' + _model + ' - Status: <font color=red>USED</font>';  } catch (error) { console.error(error); }
	}
	
	function clearReadedSignal(val) {
	  if (val == true) {
	    try { document.getElementById("txtREADSIGNAL").value  = "";  } catch (error) { console.error(error); }
	  }
	}
  
	function copyToClipboard(Text) {
		var copyText = document.getElementById(Text);
		copyText.select();
		copyText.setSelectionRange(0, 99999);
		navigator.clipboard.writeText(copyText.value);
	}
          
	window.onload = initWebSocket;


(function ($) {
    "use strict";
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });

    
})(jQuery);