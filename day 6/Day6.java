import java.io.*;
import java.util.*;

/**
 * Created by gustav.darpo on 2016-12-06.
 */
public class Day6 {
    public static void main(String[] args) {
        //FileInputStream fis = new FileInputStream("input.txt");
        List<Map<Character, Integer>> stats = buildStats("C:/kod/adventofcode/day 6/input.txt");

        stats.forEach(props -> {
            System.out.print(props.entrySet().stream().max((a, b) -> a.getValue() - b.getValue()).get().getKey());
        });
        System.out.println("");

        stats.forEach(props -> {
            System.out.print(props.entrySet().stream().min((a, b) -> a.getValue() - b.getValue()).get().getKey());
        });
    }

    private static List<Map<Character, Integer>> buildStats(String fileName) {
        BufferedReader br;
        try {
            br = new BufferedReader(new FileReader(fileName));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            return null;
        }

        List<String> lines = new ArrayList<>();
        try {
            String line;
            while ((line = br.readLine()) != null) {
                lines.add(line);
                //System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        List<Map<Character, Integer>> probsList = new ArrayList<>();
        for (int i = 0; i < 8; i++) {
            probsList.add(buildPropsMap(lines, i));
        }

        return probsList;
    }

    private static Map<Character, Integer> buildPropsMap(List<String> lines, final int i) {
        Map<Character, Integer> props = new HashMap<>();
        lines.forEach(l -> {
            char key = l.charAt(i);
            if (!props.containsKey(key)) {
                props.put(key, 0);
            }

            Integer count = props.get(key);
            count++;
            props.put(key, count);
        });

        return props;
    }
}
