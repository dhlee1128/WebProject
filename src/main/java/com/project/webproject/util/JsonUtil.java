package com.project.webproject.util;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * <pre>
* <p>Title: JsonUtil</p>
* <p>Description: JSON 유틸리티 클래스</p>
 * </pre>
 *
 * @author: sinope
 * @date: 2019.05.22
 * @version: 0.1
 */
public class JsonUtil {
	/**
	 * Map을 json으로 변환한다.
	 *
	 * @param map Map<String, Object>.
	 * @return String
	 */
	public static String getMapToJsonString(Map<String, Object> map) {
		String jsonStr = "";
		try {
			ObjectMapper mapper = new ObjectMapper();
			jsonStr = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(map);
		}
		catch (JsonGenerationException e) {
			e.printStackTrace();
		}
		catch (JsonMappingException e) {
			e.printStackTrace();
		}
		catch (IOException e) {
			e.printStackTrace();
		}
		return jsonStr;
	}

	/**
	 * JsonObject를 Map<String, Object>으로 변환한다.
	 *
	 * @param jsonObj String
	 * @return Map<String, Object>.
	 */
	public static Map<String, Object> getJsonStringToMap(String jsonStr) {
		Map<String, Object> map = new HashMap<String, Object>();
		try {
			ObjectMapper mapper = new ObjectMapper();
			map = mapper.readValue(jsonStr, new TypeReference<Map<String, Object>>(){});
		}
		catch (JsonGenerationException e) {
			e.printStackTrace();
		}
		catch (JsonMappingException e) {
			e.printStackTrace();
		}
		catch (IOException e) {
			e.printStackTrace();
		}

		return map;
	}

}