<?php
    $language = $_POST['language'];
    $code = $_POST['code'];
    $username = $_POST['username'];
    $id = $_POST['id'];

    $filePath = "../temp/user_".$username."_".$id.".".$language;
    $programFile = fopen($filePath, "w");
    fwrite($programFile, $code);
    fclose($programFile);

    if ($language == "c") {
        $outputExe = "user_".$username."_".$id."."."exe";
        $err = shell_exec("gcc $filePath -o ../temp/$outputExe 2>&1");
        if ($err) {
            echo $err;
        } else {
            $output = shell_exec(dirname(__DIR__)."/temp/$outputExe");
            //echo $output;
            $descripttorspec = array(
                0 => array("pipe", "r"),
                1 => array("pipe", "w"),
                2 => array("pipe", "w")
            );

            $process = proc_open(dirname(__DIR__)."/temp/$outputExe", $descripttorspec, $pipes, null, null);
            sleep(1);
            if (is_resource($process)) {
                fwrite($pipes[0], "5");
                fclose($pipes[0]);

                //echo (fgets($pipes[1], 4096));
                echo (stream_get_contents($pipes[1]));
                //echo (fgets($pipes[1], 4096));
        
                fclose($pipes[1]);

                $output = proc_close($process);
                echo $output;
            }
            
        }
    } else if ($language == "cpp") {
        $outputExe = $username."_".$id."."."exe";
        $err = shell_exec("g++ $filePath -o ../temp/$outputExe 2>&1");
        if ($err) {
            echo $err;
        } else {
            $output = shell_exec(dirname(__DIR__)."/temp/$outputExe");
            echo $output;
        }
    } else if ($language == "java") {
        $output = shell_exec("C:\\".'"Program Files"'.'\\"Common Files"'."\Oracle\Java\javapath\java.exe $filePath 2>&1");
        echo $output;
    }
?>