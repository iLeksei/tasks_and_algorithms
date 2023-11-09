/**
 *
 *   Write a function that takes in a non-empty string and returns its run-length encoding.

     From Wikipedia, "run-length encoding is a form of lossless data compression in
     which runs of data are stored as a single data value and count, rather than as
     the original run." For this problem, a run of data is any sequence of
     consecutive, identical characters. So the run <span>"AAA"</span> would be
     run-length-encoded as <span>"3A"</span>.

     To make things more complicated, however, the input string can contain all
     sorts of special characters, including numbers. And since encoded data must be
     decodable, this means that we can't naively run-length-encode long runs. For
     example, the run <span>"AAAAAAAAAAAA"</span> (12 <span>A</span>s), can't
     naively be encoded as <span>"12A"</span>, since this string can be decoded as
     either <span>"AAAAAAAAAAAA"</span> or <span>"1AA"</span>. Thus, long runs (runs
     of 10 or more characters) should be encoded in a split fashion; the
     aforementioned run should be encoded as <span>"9A3A"</span>.
 */


function runLengthEncoding(string) {
    // Write your code here.
}