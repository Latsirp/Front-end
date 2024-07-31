<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "teste_bd";

    // Criar a conexão
    $conn = new mysqli($servername, $username, $password, $dbname);
    session_start();
    ob_start();
    // Verificar a conexão
    if ($conn->connect_error) {
        die("Falha na conexão: " . $conn->connect_error);
    }
	function myDebug($cMensagem){
        $cMensagem = chr(13) . chr(10) . $cMensagem;
        $f = fopen('debug.log','a'); 
        fwrite($f,$cMensagem,strlen($cMensagem)); 
        fclose($f);
    }
	
    $sql = "SELECT 
	ID_PRODUTO, 
	NOME_PRODUTO, 
	DESCR_PRODUTO, 
	PRECO_PRODUTO, 
	QUALI_PRODUTO 
	FROM 
	PRODUTO ";
	$cListagem = '';
    $result = $conn->query($sql);
    if ($result->num_rows > 0){
        while($row = $result->fetch_assoc()) {
			$cListagem .= '<div class="overflow-y-auto">';
            $cListagem .= '<table class="w-full text-sm text-left text-blazeOrange">';
			$cListagem .= '<tbody>';
			$cListagem .= '<tr class="border-b">';
			$cListagem .= '<th scope="row" class="px-4 py-3 font-medium text-blazeOrange whitespace-nowrap">'.$row["NOME_PRODUTO"].'</th>';
			$cListagem .= '<td class="px-4 py-3">'.$row["ID_PRODUTO"].'</td>';
			$cListagem .= '<td class="px-4 py-3 max-w-[12rem] truncate">'.$row["DESCR_PRODUTO"].'</td>';
			$cListagem .= '<td class="px-4 py-3">'.$row["QUALI_PRODUTO"].'</td>';
			$cListagem .= '<td class="px-4 py-3">01-07-2024</td>';
			
			
			
			$cListagem .= '<td class="px-4 py-3 relative">';
            $cListagem .= '<button id="dropdown-button" data-dropdown-toggle="dropdown" class="inline-flex items-center text-sm font-medium hover:bg-blazeOrange p-1.5 text-center text-blazeOrange hover:text-white rounded-lg focus:outline-none" >';
            $cListagem .= '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" > <path d=" M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /> </svg>';
            $cListagem .= '</button>';
            $cListagem .= '<div  id="dropdown" tabindex="-1" class="hidden fixed top-0 right-0 bottom-0 left-0 z-40 flex items-center justify-center bg-black bg-opacity-50" >';
            $cListagem .= '<div class="relative p-4 w-full max-w-md mx-auto bg-white rounded-lg shadow-lg" >';
            $cListagem .= '<button type="button" class="text-blazeOrange bg-transparent hover:bg-blazeOrange hover:text-white rounded-lg text-sm p-1.5 inline-flex items-center ml-auto" data-modal-target="dropdown" data-modal-toggle="dropdown" >';
            $cListagem .= '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>';
			$cListagem .= '<span class="sr-only">Fechar</span>';
			$cListagem .= '</button>';
                            <div
                              class="flex justify-between items-center rounded-t mt-4"
                            >
                              <ul
                                class="text-lg text-center w-full"
                                aria-labelledby="example-dropdown-button"
                              >
                                <li>
                                  <button
                                    type="button"
                                    data-modal-target="updateProductModal"
                                    data-modal-toggle="updateProductModal"
                                    class="flex flex-col w-full items-center py-2 px-4 rounded-lg hover:bg-blazeOrange hover:text-white text-blazeOrange"
                                  >
                                    <svg
                                      class="w-4 h-4 mr-2"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        d=" M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                                      />
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                      />
                                    </svg>
                                    Editar
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    data-modal-target="readProductModal"
                                    data-modal-toggle="readProductModal"
                                    class="flex flex-col w-full items-center py-2 px-4 rounded-lg hover:bg-blazeOrange hover:text-white text-blazeOrange"
                                  >
                                    <svg
                                      class="w-4 h-4 mr-2"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        d=" M10 12a2 2 0 100-4 2 2 0 000 4z"
                                      />
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                      />
                                    </svg>
                                    Visualizar
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    data-modal-target="deleteModal"
                                    data-modal-toggle="deleteModal"
                                    class="flex flex-col w-full items-center py-2 px-4 rounded-lg hover:bg-blazeOrange hover:text-white text-blazeOrange"
                                  >
                                    <svg
                                      class="w-4 h-4 mr-2"
                                      viewBox="0 0 14 15"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        fill="currentColor"
                                        d="M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64282 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z"
                                      />
                                    </svg>
                                    Remover
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
			
			
			
			$cListagem .= '</tr>';
			$cListagem .= '</tbody>';
			$cListagem .= '</table>';
			$cListagem .= '</div>';
        }
    }
	echo $cListagem;
    return;
?>