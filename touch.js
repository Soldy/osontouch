            
            var osontouch = {
            	 active : 0,
                settings : {
                    fingers : 3,
                      
                },
                p : new Array,
            }

            function osontouchmakearray(){
            	 for (i = 0;osontouch.settings.fingers > i ; i++){
                    osontouch.p[i] = {
           	        posx : 0,
           	        posy : 0,
           	        oposx : 0,
           	        oposy : 0,
           	        deskoposx : 0,
           	        deskoposy : 0,
           	        deskposx : 0,
           	        deskposy : 0,
           	        startposx : 0,
           	        startposy : 0,
           	        startoposx : 0,
           	        startoposy : 0,
           	        startdeskposx : 0,
           	        startdeskposy : 0,
           	        startdeskoposx : 0,
           	        startdeskoposy : 0,
           	        endposx : 0,
           	        endposy : 0,
           	        endoposx : 0,
           	        endoposy : 0,
           	        enddeskposx : 0,
           	        enddeskposy : 0,
           	        enddeskoposx : 0,
           	        enddeskoposy : 0,
           	        clickposx : 0,
           	        clickposy : 0,
           	        lastclick : 0,
           	        currentclick : 0,
           	        active : 0,
           	        movedata : {
           	            posx : new Array,
           	            posy : new Array,
           	            oposx : new Array,
           	            oposy : new Array,
           	            deskoposx : new Array,
           	            deskoposy : new Array,
           	            deskposx : new Array,
           	            deskposy : new Array,
           	            i : 0
           	       }
                }
            }
         }
        

         osontouchmakearray();
            function osontouchdetectstart(touchpos){
                var touch = new Array;
                osontouch.active = 1;
                for (i = 0;osontouch.settings.fingers  > i ;i++){
                    if ('undefined' !== typeof touchpos.targetTouches[i]) {
            	         touch[i] = touchpos.targetTouches[i];
            	         osontouch.p[i].startoposx = touch[i].pageX;
            	         osontouch.p[i].startoposy = touch[i].pageY;
            	         osontouch.p[i].startposx = parseInt(osontouch.p[i].startoposx/osonfit.scale);
            	         osontouch.p[i].startposy = parseInt(osontouch.p[i].startoposy/osonfit.scale);
            	         osontouch.p[i].startdeskoposx = parseInt(osontouch.p[i].startoposx-osonfit.marginleft);
            	         osontouch.p[i].startdeskoposy = parseInt(osontouch.p[i].startoposy-osonfit.margintop);
            	         osontouch.p[i].startdeskposx = parseInt(osontouch.p[i].startdeskoposx/osonfit.scale);
            	         osontouch.p[i].startdeskposy = parseInt(osontouch.p[i].startdeskoposy/osonfit.scale);
            	         osontouch.p[i].movedata.i = 0;
            	         osontouch.p[i].movedata.oposx[0] = osontouch.p[i].ostartposx;
            	         osontouch.p[i].movedata.oposy[0] = osontouch.p[i].ostartposy;
            	         osontouch.p[i].movedata.posx[0] = osontouch.p[i].startposx;
            	         osontouch.p[i].movedata.posy[0] = osontouch.p[i].startposy;
            	         osontouch.p[i].movedata.deskposx[0] = osontouch.p[i].startdeskposx;
            	         osontouch.p[i].movedata.deskposy[0] = osontouch.p[i].startdeskposy;
            	         osontouch.p[i].movedata.deskoposx[0] = osontouch.p[i].startdeskoposx;
            	         osontouch.p[i].movedata.deskoposy[0] = osontouch.p[i].startdeskoposy;
            	         if(osonpointer.setup.onoff === 1){
            	             osonpointer.p[i].startoposx = osontouch.p[i].startoposx;
            	             osonpointer.p[i].startoposy = osontouch.p[i].startoposy;
            	             osonpointer.p[i].startposx = osontouch.p[i].startposx;
            	             osonpointer.p[i].startposy = osontouch.p[i].startposy;
                            osonpointer.p[i].startdeskoposx = osontouch.p[i].startdeskoposx;
                            osonpointer.p[i].startdeskoposy = osontouch.p[i].startdeskoposy;
                            osonpointer.p[i].startdeskposx = osontouch.p[i].startdeskposx;
                            osonpointer.p[i].startdeskposy = osontouch.p[i].startdeskposy;
            	             osonpointer.p[i].movedata.oposx[0] = osontouch.p[i].oposx;
            	             osonpointer.p[i].movedata.oposy[0] = osontouch.p[i].oposy;
            	             osonpointer.p[i].movedata.posx[0] = osontouch.p[i].posx;
            	             osonpointer.p[i].movedata.posy[0] = osontouch.p[i].posy;
                            osonpointer.p[i].movedata.deskoposx[0] = osontouch.p[i].deskoposx;
                            osonpointer.p[i].movedata.deskoposy[0] = osontouch.p[i].deskoposy;
                            osonpointer.p[i].movedata.deskposx[0] = osontouch.p[i].deskposx;
                            osonpointer.p[i].movedata.deskposy[0] = osontouch.p[i].deskposy;
            	         }
            	     }

                }
                osonpointerdetectstart();
            	 
            }

            function osontouchdetectmove(touchpos){
                var touch = new Array;
                osontouch.active = 1;
                for (i = 0;osontouch.settings.fingers > i; i++){
                    if ('undefined' !== typeof touchpos.targetTouches[i]) {
            	         touch[i] = touchpos.targetTouches[i];
            	         if(!(osontouch.p[i].movedata.oposx[osontouch.p[i].movedata.i] === touch[i].pageX &&  osontouch.p[i].movedata.oposy[osontouch.p[i].movedata.i] === touch[i].pageY)){
            	             osontouch.p[i].movedata.i++;
            	             osontouch.p[i].movedata.oposx[osontouch.p[i].movedata.i] = touch[i].pageX;
            	             osontouch.p[i].movedata.oposy[osontouch.p[i].movedata.i] = touch[i].pageY;
            	             osontouch.p[i].movedata.posx[osontouch.p[i].movedata.i] = parseInt(touch[i].pageX/osonfit.scale);
            	             osontouch.p[i].movedata.posy[osontouch.p[i].movedata.i] = parseInt(touch[i].pageY/osonfit.scale);
            	             osontouch.p[i].movedata.deskoposx[osontouch.p[i].movedata.i] = parseInt(touch[i].pageX-osonfit.marginleft);
            	             osontouch.p[i].movedata.deskoposy[osontouch.p[i].movedata.i] = parseInt(touch[i].pageY-osonfit.margintop);
            	             osontouch.p[i].movedata.deskposx[osontouch.p[i].movedata.i] = parseInt(osontouch.p[i].movedata.deskoposx[osontouch.p[i].movedata.i]/osonfit.scale);
            	             osontouch.p[i].movedata.deskposy[osontouch.p[i].movedata.i] = parseInt(osontouch.p[i].movedata.deskoposy[osontouch.p[i].movedata.i]/osonfit.scale);
            	             if(osonpointer.setup.onoff === 1){
            	             	  osonpointer.p[i].oposx = touch[i].pageX;
            	             	  osonpointer.p[i].oposy = touch[i].pageY;
            	                 osonpointer.p[i].posx = parseInt(touch[i].pageX/osonfit.scale);
            	                 osonpointer.p[i].posy = parseInt(touch[i].pageY/osonfit.scale);
            	                 osonpointer.p[i].movedata.oposx[osontouch.p[i].movedata.i] = osontouch.p[i].movedata.oposx[osontouch.p[i].movedata.i];
            	                 osonpointer.p[i].movedata.oposy[osontouch.p[i].movedata.i] = osontouch.p[i].movedata.oposy[osontouch.p[i].movedata.i];
            	                 osonpointer.p[i].movedata.posx[osontouch.p[i].movedata.i] = osontouch.p[i].movedata.posx[osontouch.p[i].movedata.i];
            	                 osonpointer.p[i].movedata.posy[osontouch.p[i].movedata.i] = osontouch.p[i].movedata.posy[osontouch.p[i].movedata.i];
            	                 osonpointer.p[i].movedata.deskoposx[osontouch.p[i].movedata.i] = osontouch.p[i].movedata.deskoposx[osontouch.p[i].movedata.i];
                                osonpointer.p[i].movedata.deskoposy[osontouch.p[i].movedata.i] = osontouch.p[i].movedata.deskoposy[osontouch.p[i].movedata.i];
            	                 osonpointer.p[i].movedata.deskposx[osontouch.p[i].movedata.i] = osontouch.p[i].movedata.deskposx[osontouch.p[i].movedata.i];
                                osonpointer.p[i].movedata.deskposy[osontouch.p[i].movedata.i] = osontouch.p[i].movedata.deskposy[osontouch.p[i].movedata.i];
                                osonpointer.p[0].movedata.i = osontouch.p[i].movedata.i;
            	             }
                        }
                    }
                }
                osonpointerdetectmove();
                touchpos.preventDefault();
            }
            
            function osontouchdetectend(touchpos){
                for (i = 0;osontouch.settings.fingers > i; i++){
            	          osontouch.p[i].endoposx = osontouch.p[i].movedata.oposx[osontouch.p[i].movedata.i];
            	          osontouch.p[i].endoposy = osontouch.p[i].movedata.oposy[osontouch.p[i].movedata.i];
            	          osontouch.p[i].endposx = osontouch.p[i].movedata.posx[osontouch.p[i].movedata.i];
            	          osontouch.p[i].endposy = osontouch.p[i].movedata.posy[osontouch.p[i].movedata.i];
            	          osontouch.p[i].enddeskoposx = osontouch.p[i].movedata.deskoposx[osontouch.p[i].movedata.i];
            	          osontouch.p[i].enddeskoposy = osontouch.p[i].movedata.deskoposy[osontouch.p[i].movedata.i];
            	          osontouch.p[i].enddeskposx = osontouch.p[i].movedata.deskposx[osontouch.p[i].movedata.i];
            	          osontouch.p[i].enddeskposy = osontouch.p[i].movedata.deskposy[osontouch.p[i].movedata.i];
            	          if(osonpointer.setup.onoff === 1){
            	              osonpointer.p[i].endoposx = osontouch.p[i].endoposx;
            	              osonpointer.p[i].endoposy = osontouch.p[i].endoposy;
            	              osonpointer.p[i].endposx = osontouch.p[i].endposx;
            	              osonpointer.p[i].endposy = osontouch.p[i].endposy;
                             osonpointer.p[i].enddeskoposx = osontouch.p[i].enddeskoposx;
                             osonpointer.p[i].enddeskoposy = osontouch.p[i].enddeskoposy;
                             osonpointer.p[i].enddeskposx = osontouch.p[i].enddeskposx;
                             osonpointer.p[i].enddeskposy = osontouch.p[i].enddeskposy;
            	              osonpointer.p[i].clickoposx = osontouch.p[i].endoposx;
            	              osonpointer.p[i].clickoposy = osontouch.p[i].endoposy;
            	              osonpointer.p[i].clickposx = osontouch.p[i].endposx;
            	              osonpointer.p[i].clickposy = osontouch.p[i].endposy;
                             osonpointer.p[i].clickdeskoposx = osontouch.p[i].enddeskoposx;
                             osonpointer.p[i].clickdeskoposy = osontouch.p[i].enddeskoposy;
                             osonpointer.p[i].clickdeskposx = osontouch.p[i].enddeskposx;
                             osonpointer.p[i].clickdeskposy = osontouch.p[i].enddeskposy;
            	          }
                }
                osonpointerdetectend();
                touchpos.preventDefault();
            }
