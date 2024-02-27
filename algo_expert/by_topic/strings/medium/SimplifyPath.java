import java.util.ArrayDeque;
import java.util.Deque;

void main(String[] args) {
    System.out.println(simplifyPath("/home//foo/"));
    System.out.println(simplifyPath("/a//b////c/d//././/.."));
    System.out.println(simplifyPath("/a/./b/../../c/")); // "/c"
    System.out.println(simplifyPath("/...")); // "/..."
    System.out.println(simplifyPath("/..hidden")); // "/..hidden"
    System.out.println(simplifyPath("/../")); // "/"
    System.out.println(simplifyPath("/a//b////c/d//././/..")); // "/a/b/c"
}

/**
 * Given a string path, which is an absolute path (starting with a slash '/')
 * to a file or directory in a Unix-style file system, convert it to the simplified canonical path.
 * In a Unix-style file system, a period '.' refers to the current directory,
 * a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//')
 * are treated as a single slash '/'. For this problem,
 * any other format of periods such as '...' are treated as file/directory names.
 * The canonical path should have the following format:
 * The path starts with a single slash '/'.
 * Any two directories are separated by a single slash '/'.
 * The path does not end with a trailing '/'.
 * The path only contains the directories on the path from the root directory to the target file or
 * directory (i.e., no period '.' or double period '..')
 * Return the simplified canonical path.
 * <p>
 * Example 1:
 * Input: path = "/home/"
 * Output: "/home"
 * Explanation: Note that there is no trailing slash after the last directory name.
 * <p>
 * Example 2:
 * Input: path = "/../"
 * Output: "/"
 * Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.
 * <p>
 * Example 3:
 * Input: path = "/home//foo/"
 * Output: "/home/foo"
 * Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.
 * <p>
 * Constraints:
 * 1 <= path.length <= 3000
 * path consists of English letters, digits, period '.', slash '/' or '_'.
 * path is a valid absolute Unix path.
 */
public String simplifyPath(String path) {
    if (path == null || path.isEmpty()) return "/";
    StringBuilder sb = new StringBuilder();
    Deque<String> q = new ArrayDeque<>();

    for (String entry: path.split("/")) {
        if (".".equals(entry) || entry.isEmpty()) {
            continue;
        }

        if ("..".equals(entry)) {
            q.pollLast();
            continue;
        }

        q.offer(entry);
    }

    while(!q.isEmpty()) {
        sb.append("/");
        sb.append(q.poll());
    }
    return sb.isEmpty() ? "/" : sb.toString();
}